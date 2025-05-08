import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Muayene() {
  const [muayeneTarihi, setMuayeneTarihi] = useState('');
  const [muayeneEden, setMuayeneEden] = useState('');
  const [notlar, setNotlar] = useState('');
  const [ekipmanId, setEkipmanId] = useState('');
  const [ekipmanlar, setEkipmanlar] = useState([]);
  const [muayeneler, setMuayeneler] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchEkipmanlar();
    handleListele();
  }, []);

  const fetchEkipmanlar = async () => {
    try {
      const response = await axios.get('/api/v1/ekipman/listele');
      setEkipmanlar(response.data);
    } catch (error) {
      console.error('Ekipmanlar yüklenirken hata oluştu:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      const muayeneData = {
        muayeneTarihi,
        muayeneEden,
        notlar,
        ekipman: { id: ekipmanId }
      };

      if (editingId) {
        response = await axios.put(`/api/v1/muayene/guncelle/${editingId}`, muayeneData);
      } else {
        response = await axios.post('/api/v1/muayene/kaydet', muayeneData);
      }

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage(editingId ? 'Muayene başarıyla güncellendi' : 'Muayene başarıyla kaydedildi');
        setMuayeneTarihi('');
        setMuayeneEden('');
        setNotlar('');
        setEkipmanId('');
        setEditingId(null);
        handleListele();
        
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      }
    } catch (error) {
      console.error('Hata:', error);
      setSuccessMessage('');
    }
  };

  const handleListele = async () => {
    try {
      const response = await axios.get('/api/v1/muayene/listele');
      if (response.status === 200) {
        setMuayeneler(response.data);
      }
    } catch (error) {
      console.error('Listeleme hatası:', error);
    }
  };

  const handleDelete = async (muayeneId) => {
    if (window.confirm('Bu muayene kaydını silmek istediğinizden emin misiniz?')) {
      try {
        const response = await axios.delete(`/api/v1/muayene/sil/${muayeneId}`);
        if (response.status === 200) {
          handleListele();
          setSuccessMessage('Muayene kaydı başarıyla silindi');
          setTimeout(() => {
            setSuccessMessage('');
          }, 3000);
        }
      } catch (error) {
        console.error('Silme hatası:', error);
      }
    }
  };

  const handleEdit = (muayene) => {
    setMuayeneTarihi(muayene.muayeneTarihi.split('T')[0]);
    setMuayeneEden(muayene.muayeneEden);
    setNotlar(muayene.notlar);
    setEkipmanId(muayene.ekipman.id);
    setEditingId(muayene.id);
  };

  return (
    <div className="container">
      <div className="text-center">
        <h1>Muayene Formu</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="muayeneTarihi" className="form-label">
            Muayene Tarihi
          </label>
          <input
            type="date"
            id="muayeneTarihi"
            value={muayeneTarihi}
            onChange={(e) => setMuayeneTarihi(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="muayeneEden" className="form-label">
            Muayene Eden
          </label>
          <input
            type="text"
            id="muayeneEden"
            value={muayeneEden}
            onChange={(e) => setMuayeneEden(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="notlar" className="form-label">
            Notlar
          </label>
          <textarea
            id="notlar"
            value={notlar}
            onChange={(e) => setNotlar(e.target.value)}
            className="form-control"
            rows="3"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ekipman" className="form-label">
            Ekipman
          </label>
          <select
            id="ekipman"
            value={ekipmanId}
            onChange={(e) => setEkipmanId(e.target.value)}
            className="form-control"
          >
            <option value="">Ekipman Seçiniz</option>
            {ekipmanlar.map((ekipman) => (
              <option key={ekipman.id} value={ekipman.id}>
                {ekipman.ekipmanAdi} - {ekipman.seriNumarasi}
              </option>
            ))}
          </select>
        </div>

        <div className="text-center mb-3">
          <button type="submit" className="btn btn-primary me-2">
            {editingId ? 'Güncelle' : 'Kaydet'}
          </button>
          {editingId && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setEditingId(null);
                setMuayeneTarihi('');
                setMuayeneEden('');
                setNotlar('');
                setEkipmanId('');
              }}
            >
              İptal
            </button>
          )}
        </div>

        {successMessage && (
          <div className="alert alert-success text-center" role="alert">
            {successMessage}
          </div>
        )}
      </form>

      <div className="mt-5">
        <h2>Muayene Kayıtları</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Muayene Tarihi</th>
              <th>Muayene Eden</th>
              <th>Ekipman</th>
              <th>Notlar</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {muayeneler.map((muayene) => (
              <tr key={muayene.id}>
                <td>{new Date(muayene.muayeneTarihi).toLocaleDateString('tr-TR')}</td>
                <td>{muayene.muayeneEden}</td>
                <td>{muayene.ekipman.ekipmanAdi}</td>
                <td>{muayene.notlar}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(muayene)}
                  >
                    Düzenle
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(muayene.id)}
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}