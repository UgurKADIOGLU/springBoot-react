import axios from "axios";
import React, { useState } from "react";

function Calisan() {
  const [ad, setAd] = useState("");
  const [pozisyon, setPozisyon] = useState("");
  const [departman, setDepartman] = useState("");
  const [eposta, setEposta] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post("/api/v1/calisan", {
      ad,
      pozisyon,
      departman,
      eposta,
    })
    
    
  
    
  };

  return (
    <div className="container">
    <form onSubmit={onSubmit}>
     
      <h1 className="text-center">Çalışan</h1>
      <div>
        <label htmlFor="ad">Ad</label>
        <input
          type="text"
          placeholder="Ad"
          id="ad"
          onChange={(event) => setAd(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="pozisyon">Pozisyon</label>
        <input
          type="text"
          placeholder="Pozisyon"
          id="soypozisyonad"
          onChange={(event) => setPozisyon(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="departman">Departman</label>
        <input
          type="text"
          placeholder="Departman"
          id="departman"
          onChange={(event) => setDepartman(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="eposta">Maaş</label>
        <input
          type="text"
          placeholder="Eposta"
          id="eposta"
          onChange={(event) => setEposta(event.target.value)}
        />
      </div>
      <div>
        <button>Kayıt Et</button>
      </div>
    </form>
    </div>
  );
}

export default Calisan;
