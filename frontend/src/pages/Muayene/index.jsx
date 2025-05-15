import React, { useState } from "react";

function Muayene() {
  const [muayeneTarihi, setMuayeneTarihi] = useState("");
  const [muayeneEden, setMuayeneEden] = useState("");
  const [notlar, setNotlar] = useState("");
  const [ekipman, setEkipman] = useState("");

  return (
    <>
      <h1 className="text-center">Muayene</h1>
      <div>
        <label htmlFor="muayeneTarihi">Muayene Tarihi</label>
        <input
          type="date"
          placeholder="Muayene Tarihi"
          id="muayeneTarihi"
          onChange={(event) => setMuayeneTarihi(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="muayeneEden">Muayene Eden</label>
        <input
          type="text"
          placeholder="Muayene Eden"
          id="egitimTmuayeneEdenarihi"
          onChange={(event) => setMuayeneEden(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="notlar">Notlar</label>
        <input
          type="text"
          placeholder="Notlar"
          id="notlar"
          onChange={(event) => setNotlar(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="ekipman">Ekipman</label>
        <input
          type="text"
          placeholder="Ekipman"
          id="ekipman"
          onChange={(event) => setNotlar(event.target.value)}
        />
      </div>

      <div>
        <button>Kayıt Et</button>
      </div>
    </>
  );
}
export default Muayene;
