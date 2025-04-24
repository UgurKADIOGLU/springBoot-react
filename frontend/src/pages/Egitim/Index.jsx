import axios from "axios";
import { useEffect, useState } from "react";
import { egitim } from "./api";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

export function Egitim(){
    const [egitimAdi, setEgitimAdi] = useState();
      const [egitimTarihi, setEgitimTarihi] = useState();
      const [calisanlar, setCalisanlar] = useState([]); //calışanlar listesini kayıt ediyor
      const[egitimler,setEgitimler]=useState([]);
          
      const [apiProgress, setApiProgress] = useState(false);
      const [showList, setShowList] = useState(false);
      const [successMessage, setSuccessMessage] = useState(false);
      const [calisanlarList, setCalisanlarList] = useState([]); //Use efect ile çalışanların listesini çekiyor

      useEffect(() => {
        axios.get("/calisanlar/getir")
          .then(res => {
            setCalisanlarList(res.data);
            console.log("API cevabı:", res.data);
          })
          .catch(err => {
            console.error("Çalışanlar alınamadı:", err);
          });
      }, []);

      const handleCheckboxChange = (id) => {
        setCalisanlar((prevState) => {
          if (prevState.includes(id)) {
            return prevState.filter((calisanId) => calisanId !== id);
          } else {
            return [...prevState, id];
          }
        });
      };

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
          
          <div>
      <h2>Çalışanlar</h2>
      {calisanlarList?.map(calisan => (
        <div key={calisan.id}>
          <label>
            <input
              type="checkbox"
              checked={calisanlar.includes(calisan.id)} // Seçili mi kontrol et
              onChange={() => handleCheckboxChange(calisan.id)} // Değiştirildiğinde handle et
            />
            {calisan.ad} {/* Çalışanın adı */}
          </label>
        </div>
      ))}
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
        <div>
      <h2>Kayıtlı Eğitimler</h2>
      {egitimler.map((egitim) => (
        <div key={egitim.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <h3>{egitim.egitimAdi}</h3>
          <p>Tarih: {egitim.egitimTarihi}</p>
          <h4>Katılan Çalışanlar:</h4>
          <ul>
            {egitim.calisanlar && egitim.calisanlar.length > 0 ? (
              egitim.calisanlar.map(c => (
                <li key={c.id}>{c.ad}</li>
              ))
            ) : (
              <li>Katılım yok</li>
            )}
          </ul>
        </div>
      ))}
    </div>
      </div>
        </>
    )
}