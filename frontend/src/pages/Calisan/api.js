import axios from "axios";


export default function calisan(body) {
  return axios.post("/api/v1/calisan", body)
}
