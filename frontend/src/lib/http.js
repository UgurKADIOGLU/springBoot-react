import axios from "axios";
import { i18nInstance } from "../../locales";

const http=axios.create();

http.interceptors.request.use((config)=>{
    config.headers["Accept-Language"]=i18nInstance.language
})

export default http;