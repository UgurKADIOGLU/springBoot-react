import axios from "axios";

export function egitim(body){
    return axios.post("/egitim/kaydet", body )
}