
import React, { useState } from "react";
import calisan from "./api";

function Calisan() {
  const [ad, setAd] = useState("");
  const [pozisyon, setPozisyon] = useState("");
  const [departman, setDepartman] = useState("");
  const [eposta, setEposta] = useState("");
  const [apiProgress, setApiProgress] = useState(false);
  const[successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 

  const onSubmit = async (event) => {
    setApiProgress(true);
    event.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    try{
      const response=await calisan({
      ad,
      pozisyon,
      departman,
      eposta,
    })
      setSuccessMessage(response.data.message);
    } catch{
      setErrorMessage("Bir hata oluştu");
    }finally{
      setApiProgress(false);
    }};
      
    

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="text-center">
          <h1 className="text-center">Çalışan</h1>
        </div>
        <div className="mb-3">
          <label htmlFor="ad" className="form-label">
            Ad
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Ad"
            id="ad"
            onChange={(event) => setAd(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="pozisyon">
            Pozisyon
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Pozisyon"
            id="soypozisyonad"
            onChange={(event) => setPozisyon(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="departman">
            Departman
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Departman"
            id="departman"
            onChange={(event) => setDepartman(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="eposta">
            E posta
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Eposta"
            id="eposta"
            onChange={(event) => setEposta(event.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            disabled={apiProgress}
            type="submit"
            className="btn btn-primary"
          >
            {apiProgress && (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            Kaydet
          </button>
          {successMessage && (
            <div className="alert alert-success mt-3" role="alert">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="alert alert-danger mt-3" role="alert">
              {errorMessage}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Calisan;
