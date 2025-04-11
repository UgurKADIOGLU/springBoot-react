import axios from "axios";

export function calisan(body){
    return axios.post("/calisanlar/kaydet", body )
}

export function calisanGetir(){
    return axios.get("/calisanlar/getir" )
}