import React, { useState } from "react";

function OlayRaporu() {
  const [aciklama, setAciklama] = useState("");
  const [olayTarihi, setOlayTarihi] = useState("");
  const [raporlayan, setRaporlayan] = useState("");

  return (
    <>
      <h1 className="text-center">Olay Raporu</h1>
      <div>
        <label htmlFor="aciklama">Açıklama</label>
        <input
          type="text"
          placeholder="Açıklama"
          id="aciklama"
          onChange={(event) => setAciklama(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="olayTarihi">Olay Tarihi</label>
        <input
          type="date"
          placeholder="Olay Tarihi"
          id="olayTarihi"
          onChange={(event) => setOlayTarihi(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="raporlayan">Raporlayan</label>
        <input
          type="text"
          placeholder="Raporlayan"
          id="raporlayan"
          onChange={(event) => setRaporlayan(event.target.value)}
        />
      </div>

      <div>
        <button>Kayıt Et</button>
      </div>
    </>
  );
}
export default OlayRaporu;
