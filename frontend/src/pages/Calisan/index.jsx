import React, { useState } from 'react'

export default function Calisan() {

const[ad,setAd]=useState();

  return (
    <>
    <div>
        <label htmlFor='ad'>Ad</label>
     <input id='ad' onChange={}/>   
    </div>
    <div>
        <label htmlFor='pozisyon'>Pozisyon</label>
     <input id='pozisyon'/>   
    </div>
    <div>
        <label htmlFor='departman'>Departman</label>
     <input id='departman'/>   
    </div>
    <div>
        <label htmlFor='eposta'>Eposta</label>
     <input id='eposta'/>   
    </div>
    <div>
        <button>Kaydet</button>
    </div>
    </>
  )
}
