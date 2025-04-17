import axios from "axios";
import { useState } from "react";
import { egitim } from "./api";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

export function Egitim(){
    const [egitimAdi, setEgitimAdi] = useState();
      const [egitimTarihi, setEgitimTarihi] = useState();
      const [calisanlar, setCalisanlar] = useState();
      const[egitimler,setEgitimler]=useState([]);
     
    
      const [apiProgress, setApiProgress] = useState(false);
      const [showList, setShowList] = useState(false);
      const [successMessage, setSuccessMessage] = useState(false);
     

      const handleChange = (value) => {        
        const formattedDate = value.format('YYYY-MM-DD');
        setEgitimTarihi(formattedDate);
      };
    
      const onSubmit = async (event) => {
        event.preventDefault();
      
        setSuccessMessage(); // Önceki mesajı temizle (isteğe bağlı)
        setApiProgress(true);
      
        try {
          const response = await egitim({ egitimAdi, egitimTarihi, calisanlar});
          setSuccessMessage(response.data.message);
        } catch (error) {
          // Hata mesajı göstermek istersen buraya ekleyebilirsin
          console.error("Hata oluştu:", error);
        } finally {
          setApiProgress(false);
        }
      };
    
      const getAll = async () => {
        try {
          const response = await axios.get("/egitim/getir");
          setEgitimler(response.data);
          setShowList(true);
    
          // hata varsa temizle
        } catch (err) {
          console.error("Veri alınırken hata oluştu:", err);
        } finally {
          setApiProgress(false);
        }
      };
    return(
        <>
        <div className="container">
        <form onSubmit={onSubmit}>
          <div className="text-center">
            <h1>Eğitimler</h1>
          </div>
          <div className="mb-3">
            <label htmlFor="egitimAdi" className="form-label">
              Eğitim Adı
            </label>
            <input
              id="egitimAdi"
              onChange={(event) => setEgitimAdi(event.target.value)}
              className="form-control"
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="calisanlar" className="form-label">
              Çalışanlar
            </label>
            <input
              id="calisanlar"
              onChange={(event) => setCalisanlar(event.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
          <label htmlFor="calisanlar" className="form-label">
              Tarih Seç
            </label>
      <Datetime
        onChange={handleChange}
        timeFormat={false}
        dateFormat="YYYY-MM-DD"
        value={egitimTarihi}
      />
         </div>
          <div className="mb-3">
            <button
              className="btn btn-primary"
              disabled={
                apiProgress || !egitimAdi  
              }
            >
              {apiProgress && (
                <span
                  className="spinner-border spinner-border-sm "
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
              Kaydet
            </button>
          </div>
          <div className="mb3">
            {successMessage && (
              <div className="alert alert-success text-center">
                {successMessage}
              </div>
            )}
          </div>
        </form>

        <div className="mb-3">
          <button className="btn btn-primary" onClick={getAll}>
            Eğitimleri Listele
          </button>
        </div>
        {showList && (
          <div>
            <h2>Eğitimler</h2>
            <ul>
              {egitimler.map((egitim) => (
                <li key={egitim.id}>
                  {egitim.egitimAdi} {egitim.egitimTarihi}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
        </>
    )
}