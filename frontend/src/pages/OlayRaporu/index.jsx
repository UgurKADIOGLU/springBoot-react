import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function OlayRaporu() {
  const [aciklama, setAciklama] = useState('');
  const [olayTarihi, setOlayTarihi] = useState('');
  const [raporlayan, setRaporlayan] = useState('');
  const [calisanlar, setCalisanlar] = useState([]);
  const [successMessage, setSuccessMessage] = React.useState('');
  const [raporlar, setRaporlar] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const fetchCalisanlar = async () => {
      try {
        const response = await axios.get('/api/v1/olay-raporu/calisanlar');
        setCalisanlar(response.data);
      } catch (error) {
        console.error('Çalışanlar yüklenirken hata oluştu:', error);
      }
    };

    fetchCalisanlar();
  }, []);

  useEffect(() => {
    handleListele();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      const olayRaporu = {
        aciklama,
        olayTarihi,
        raporlayan: { id: raporlayan }
      };

      if (editingId) {
        response = await axios.put(`/api/v1/olay-raporu/guncelle/${editingId}`, olayRaporu);
      } else {
        response = await axios.post('/api/v1/olay-raporu/kaydet', olayRaporu);
      }

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage(editingId ? 'Olay raporu başarıyla güncellendi' : 'Olay raporu başarıyla kaydedildi');
        setAciklama('');
        setOlayTarihi('');
        setRaporlayan('');
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
      const response = await axios.get('/api/v1/olay-raporu/listele');
      if (response.status === 200) {
        setRaporlar(response.data);
      }
    } catch (error) {
      console.error('Listeleme hatası:', error);
    }
  };

  const handleDelete = async (raporId) => {
    if (window.confirm('Bu raporu silmek istediğinizden emin misiniz?')) {
      try {
        const response = await axios.delete(`/api/v1/olay-raporu/sil/${raporId}`);
        if (response.status === 200) {
          handleListele();
          setSuccessMessage('Olay raporu başarıyla silindi');
          setTimeout(() => {
            setSuccessMessage('');
          }, 3000);
        }
      } catch (error) {
        console.error('Silme hatası:', error);
      }
    }
  };

  const handleEdit = (rapor) => {
    setAciklama(rapor.aciklama);
    setOlayTarihi(rapor.olayTarihi.split('T')[0]);
    setRaporlayan(rapor.raporlayan.id);
    setEditingId(rapor.id);
  };

  return (
    <>
      <div className="container">
        <div className="text-center">
          <h1>Olay Raporu</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="aciklama" className="form-label">
              Açıklama
            </label>
            <textarea
              id="aciklama"
              value={aciklama}
              onChange={(event) => setAciklama(event.target.value)}
              className="form-control"
              rows="3"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="olayTarihi" className="form-label">
              Olay Tarihi
            </label>
            <input
              type="date"
              id="olayTarihi"
              value={olayTarihi}
              onChange={(event) => setOlayTarihi(event.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="raporlayan" className="form-label">
              Raporlayan Çalışan
            </label>
            <select
              id="raporlayan"
              value={raporlayan}
              onChange={(event) => setRaporlayan(event.target.value)}
              className="form-control"
            >
              <option value="">Çalışan Seçiniz</option>
              {calisanlar.map((calisan) => (
                <option key={calisan.id} value={calisan.id}>
                  {calisan.ad} {calisan.pozisyon}
                </option>
              ))}
            </select>
          </div>
          <div className="text-center mb-3">
            <button type="submit" className="btn btn-primary me-2">
              Kaydet
            </button>
          </div>
          <div className="mb-3">
            {successMessage && (
              <div className="alert alert-success text-center">
                {successMessage}
              </div>
            )}
          </div>
        </form>
        <div className="mt-5">
          <h2>Olay Raporları</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Açıklama</th>
                <th>Olay Tarihi</th>
                <th>Raporlayan</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {raporlar.map((rapor) => (
                <tr key={rapor.id}>
                  <td>{rapor.aciklama}</td>
                  <td>{rapor.olayTarihi.split('T')[0]}</td>
                  <td>{rapor.raporlayan.ad}</td>
                  <td>
                    <button
                      className="btn btn-warning me-2"
                      onClick={() => handleEdit(rapor)}
                    >
                      Düzenle
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(rapor.id)}
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
    </>
  )
}