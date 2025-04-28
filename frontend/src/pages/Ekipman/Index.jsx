import React from 'react'
import axios from 'axios'

export default function Ekipman() {
  const [ekipmanAdi, setEkipmanAdi] = React.useState('');
  const [seriNumarasi, setSeriNumarasi] = React.useState('');
  const [sonMuayeneTarihi, setSonMuayeneTarihi] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/ekipman/kaydet', {
        ekipmanAdi,
        seriNumarasi,
        sonMuayeneTarihi
      });
      if (response.status === 200 || response.status === 201) {
        setSuccessMessage('Ekipman başarıyla kaydedildi');
        setEkipmanAdi('');
        setSeriNumarasi('');
        setSonMuayeneTarihi('');
        
        // 3 saniye sonra success mesajını kaldır
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      }
    } catch (error) {
      console.error('Hata:', error);
      setSuccessMessage('');
    }
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
          <button type="submit" className="btn btn-primary">
            Kaydet
          </button>
          
          <div className="mb3">
            {successMessage && (
              <div className="alert alert-success text-center">
                {successMessage}
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  )
}
