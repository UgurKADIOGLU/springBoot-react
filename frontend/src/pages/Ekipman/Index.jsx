import React from 'react'
import axios from 'axios'

export default function Ekipman() {
  const [ekipmanAdi, setEkipmanAdi] = React.useState('');
  const [seriNumarasi, setSeriNumarasi] = React.useState('');
  const [sonMuayeneTarihi, setSonMuayeneTarihi] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');
  const [ekipmanlar, setEkipmanlar] = React.useState([]);
  const [editingId, setEditingId] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (editingId) {
        response = await axios.put(`/api/v1/ekipman/guncelle/${editingId}`, {
          ekipmanAdi,
          seriNumarasi,
          sonMuayeneTarihi
        });
      } else {
        response = await axios.post('/api/v1/ekipman/kaydet', {
          ekipmanAdi,
          seriNumarasi,
          sonMuayeneTarihi
        });
      }

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage(editingId ? 'Ekipman başarıyla güncellendi' : 'Ekipman başarıyla kaydedildi');
        setEkipmanAdi('');
        setSeriNumarasi('');
        setSonMuayeneTarihi('');
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
      const response = await axios.get('/api/v1/ekipman/listele');
      if (response.status === 200) {
        setEkipmanlar(response.data);
      }
    } catch (error) {
      console.error('Listeleme hatası:', error);
    }
  };

  const handleDelete = async (ekipmanId) => {
    try {
      const response = await axios.delete(`/api/v1/ekipman/sil/${ekipmanId}`);
      if (response.status === 200) {
        // Refresh the list after deletion
        handleListele();
        setSuccessMessage('Ekipman başarıyla silindi');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      }
    } catch (error) {
      console.error('Silme hatası:', error);
    }
  };

  const handleEdit = (ekipman) => {
    setEkipmanAdi(ekipman.ekipmanAdi);
    setSeriNumarasi(ekipman.seriNumarasi);
    setSonMuayeneTarihi(ekipman.sonMuayeneTarihi);
    setEditingId(ekipman.id);
  };

  const isMuayeneTarihiGecmis = (tarih) => {
    const muayeneTarihi = new Date(tarih);
    const birYilOnce = new Date();
    birYilOnce.setFullYear(birYilOnce.getFullYear() - 1);
    return muayeneTarihi < birYilOnce;
  };

  return (
    <>
      <div className="container">
        <div className="text-center">
          <h1>Ekipmanlar</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="ekipmanınAdi" className="form-label">
              Ekipmanın Adı
            </label>
            <input
              id="ekipmanınAdi"
              value={ekipmanAdi}
              onChange={(event) => setEkipmanAdi(event.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="seriNumarasi" className="form-label">
              Seri Numarası
            </label>
            <input
              id="seriNumarasi"
              value={seriNumarasi}
              onChange={(event) => setSeriNumarasi(event.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="sonMuayeneTarihi" className="form-label">
              Son Muayene Tarihi
            </label>
            <input
              type="date"
              id="sonMuayeneTarihi"
              value={sonMuayeneTarihi}
              onChange={(event) => setSonMuayeneTarihi(event.target.value)}
              className="form-control"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary me-2">
              Kaydet
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleListele}>
              Ekipmanları Listele
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

        {/* Ekipman Listesi */}
        {ekipmanlar.length > 0 && (
          <div className="mt-4">
            <h2>Ekipman Listesi</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Ekipman Adı</th>
                  <th>Seri Numarası</th>
                  <th>Son Muayene Tarihi</th>
                  <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {ekipmanlar.map((ekipman, index) => (
                  <tr 
                    key={index}
                    className={isMuayeneTarihiGecmis(ekipman.sonMuayeneTarihi) ? 'table-danger' : ''}
                  >
                    <td>{ekipman.ekipmanAdi}</td>
                    <td>{ekipman.seriNumarasi}</td>
                    <td>{ekipman.sonMuayeneTarihi}</td>
                    <td>
                      <button 
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => handleEdit(ekipman)}
                      >
                        Düzenle
                      </button>
                      <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(ekipman.id)}
                      >
                        Sil
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}
