import React, { useState } from 'react'

function Egitim() {
   const [egitimAdi, setEgitimAdi] = useState("");
          const [egitimTarihi, setEgitimTarihi] = useState("");
          const [calisanlar, setCalisanlar] = useState(""); 
          
    return (
      <>
      <h1 className="text-center">Eğitim</h1>
      <div>
        <label htmlFor="egitimAdi">Eğitimin Adı</label>
        <input type="text" placeholder="Ekipman Adı" id="egitimAdi" onChange={(event)=>setEgitimAdi(event.target.value)} />
      </div>
      <div>
        <label htmlFor="egitimTarihi">Eğitim Tarihi</label>
        <input type="date" placeholder="Eğitim Tarihi" id="egitimTarihi" onChange={(event)=>setEgitimTarihi(event.target.value)}/>
      </div>
      <div>
        <label htmlFor="calisanlar">Çalışanlar</label>
        <input type="text" placeholder="Çalışanlar" id="calisanlar" onChange={(event)=>setCalisanlar(event.target.value)}/>
      </div>
       
        <div><button >Kayıt Et</button></div>      
    </>
    )
  }

export default Egitim