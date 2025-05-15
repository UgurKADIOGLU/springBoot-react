import React, { useState } from 'react'

function Ekipman() {
    const [ekipmanAdi, setEkipmanAdi] = useState("");
        const [seriNumarasi, setseriNumarasi] = useState("");
        const [sonMuayeneTarihi, setSonMuayeneTarihi] = useState(""); 
        
  return (
    <>
    <h1 className="text-center">Ekipman</h1>
    <div>
      <label htmlFor="ekipmanAdi">Ekipman Adı</label>
      <input type="text" placeholder="Ekipman Adı" id="ekipmanAdi" onChange={(event)=>setEkipmanAdi(event.target.value)} />
    </div>
    <div>
      <label htmlFor="seriNumarasi">Seri Numarası</label>
      <input type="text" placeholder="Seri Numarası" id="seriNumarasi" onChange={(event)=>setseriNumarasi(event.target.value)}/>
    </div>
    <div>
      <label htmlFor="sonMuayeneTarihi">Son Muayene Tarihi</label>
      <input type="text" placeholder="Son Muayene Tarihi" id="sonMuayeneTarihi" onChange={(event)=>setSonMuayeneTarihi(event.target.value)}/>
    </div>
     
      <div><button >Kayıt Et</button></div>      
  </>
  )
}

export default Ekipman