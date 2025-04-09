import axios from 'axios';
import React, { useState } from 'react'

export default function Calisan() {

const[ad,setAd]=useState();
const[pozisyon,setPozisyon]=useState();
const[departman,setDepartman]=useState();
const[eposta,setEposta]=useState();

const onSubmit=(event)=>{
  event.preventDefault();
axios.post('/calisanlar/kaydet',{ad,pozisyon,departman,eposta})
}

  return (
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
  )
}
