import axios from 'axios';
import React, { useState } from 'react'

export default function Calisan() {

const[ad,setAd]=useState();
const[pozisyon,setPozisyon]=useState();
const[departman,setDepartman]=useState();
const[eposta,setEposta]=useState();
const[calisanlar,setCalisanlar]=useState([]);
const [showList, setShowList] = useState(false);

const onSubmit=(event)=>{
  event.preventDefault();
axios.post('/calisanlar/kaydet',{ad,pozisyon,departman,eposta})
}

const getAll=async ()=>{
  
  try {
    const response = await axios.get("/calisanlar/getir");
    setCalisanlar(response.data);
    setShowList(true);
   // hata varsa temizle
  } catch (err) {
    console.error("Veri alınırken hata oluştu:", err);
    
  }
 
 }
    
  



  return (
    <>
    <form onSubmit={onSubmit}>
    <div>
        <label htmlFor='ad'>Ad</label>
     <input id='ad' onChange={(event)=>setAd(event.target.value)}/>   
    </div>
    <div>
        <label htmlFor='pozisyon'>Pozisyon</label>
     <input id='pozisyon' onChange={(event)=>setPozisyon(event.target.value)}/>   
    </div>
    <div>
        <label htmlFor='departman'>Departman</label>
     <input id='departman' onChange={(event)=>setDepartman(event.target.value)}/>   
    </div>
    <div>
        <label htmlFor='eposta'>Eposta</label>
     <input id='eposta' onChange={(event)=>setEposta(event.target.value)}/>   
    </div>
    <div>
        <button disabled={!ad || !pozisyon || !departman || !eposta} >Kaydet</button>
    </div>
    
    </form>
    <div>
    <button onClick={getAll}>Calisanlari listele</button>
</div>
{showList && (<div>
      <h2>Kullanıcılar</h2>
      <ul>
        {calisanlar.map(calisan => (
          <li key={calisan.id}>{calisan.ad} {calisan.departman}</li>
        ))}
      </ul>
    </div>)}
</>
  )
}
