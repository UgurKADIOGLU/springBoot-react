import React, { useState } from "react";
import { calisan, calisanGetir } from "./api";

export default function Calisan() {
  const [ad, setAd] = useState();
  const [pozisyon, setPozisyon] = useState();
  const [departman, setDepartman] = useState();
  const [eposta, setEposta] = useState();
  const [calisanlar, setCalisanlar] = useState([]);
  const [apiProgress, setApiProgress] = useState(false);
  const [showList, setShowList] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
  
    setSuccessMessage(); // Önceki mesajı temizle (isteğe bağlı)
    setApiProgress(true);
  
    try {
      const response = await calisan({ ad, pozisyon, departman, eposta });
      setSuccessMessage(response.data.message);
    } catch (error) {
      // Hata mesajı göstermek istersen buraya ekleyebilirsin
      console.error("Hata oluştu:", error);
    } finally {
      setApiProgress(false);
    }
  };

  const getAll = async () => {
    try {
      const response = await calisanGetir();
      setCalisanlar(response.data);
      setShowList(true);

      // hata varsa temizle
    } catch (err) {
      console.error("Veri alınırken hata oluştu:", err);
    } finally {
      setApiProgress(false);
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={onSubmit}>
          <div className="text-center">
            <h1>Çalışan</h1>
          </div>
          <div className="mb-3">
            <label htmlFor="ad" className="form-label">
              Ad
            </label>
            <input
              id="ad"
              onChange={(event) => setAd(event.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pozisyon" className="form-label">
              Pozisyon
            </label>
            <input
              id="pozisyon"
              onChange={(event) => setPozisyon(event.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="departman" className="form-label">
              Departman
            </label>
            <input
              id="departman"
              onChange={(event) => setDepartman(event.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="eposta" className="form-label">
              Eposta
            </label>
            <input
              id="eposta"
              onChange={(event) => setEposta(event.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <button
              className="btn btn-primary"
              disabled={
                apiProgress || !ad || !pozisyon || !departman || !eposta
              }
            >
              {apiProgress && (
                <span
                  className="spinner-border spinner-border-sm "
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
              Kaydet
            </button>
          </div>
          <div className="mb3">
            {successMessage && (
              <div className="alert alert-success text-center">
                {successMessage}
              </div>
            )}
          </div>
        </form>

        <div className="mb-3">
          <button className="btn btn-primary" onClick={getAll}>
            Calisanlari listele
          </button>
        </div>
        {showList && (
          <div>
            <h2>Kullanıcılar</h2>
            <ul>
              {calisanlar.map((calisan) => (
                <li key={calisan.id}>
                  {calisan.ad} {calisan.departman}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
