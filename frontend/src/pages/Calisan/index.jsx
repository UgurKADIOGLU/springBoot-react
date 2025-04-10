import axios from "axios";
import React, { useState } from "react";

export default function Calisan() {
  const [ad, setAd] = useState();
  const [pozisyon, setPozisyon] = useState();
  const [departman, setDepartman] = useState();
  const [eposta, setEposta] = useState();
  const [calisanlar, setCalisanlar] = useState([]);
  const [message, setMessage] = useState([]);
  const [showList, setShowList] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    axios.post("/calisanlar/kaydet", { ad, pozisyon, departman, eposta });
  };

  const getAll = async () => {
    try {
      const response = await axios.get("/calisanlar/getir");
      setCalisanlar(response.data);
      setShowList(true);

      // hata varsa temizle
    } catch (err) {
      console.error("Veri alınırken hata oluştu:", err);
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
            <button className="btn btn-primary" disabled={!ad || !pozisyon || !departman || !eposta}>
              Kaydet
            </button>
          </div>
        </form>

        <div className="mb-3">
          <button className="btn btn-primary" onClick={getAll}>Calisanlari listele</button>
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
