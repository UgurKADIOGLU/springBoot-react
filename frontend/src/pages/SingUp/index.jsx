import React, { useState } from "react";
import { singUp } from "./api";

export function SingUp() {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRepassword] = useState();
  const [apiProgress,setApiProgress]=useState(false);
  const[successMessage,setSuccessMessage]=useState();

  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeRePassword = (event) => {
    setRepassword(event.target.value);
  };

  console.log(username);

  const onSubmit = async (event) => {
    setSuccessMessage();
    setApiProgress(true);
    event.preventDefault();
    try{
     const response=await singUp({
      username,
      email,
      password,
    })
    setSuccessMessage(response.data.message) 
    }catch{
      
    }
    finally{
      setApiProgress(false)
    }  
  };

  return (
    <div className="container">
      <div className="col-lg-6 offset-lg-3">
      <form onSubmit={onSubmit} className="card">
        <div className="text-center card-header">
          <h1>Sing Up</h1>
        </div>
<div className="card-body">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            onChange={onChangeUserName}
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            onChange={onChangePassword}
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="repassword" className="form-label">
            Password Repeat
          </label>
          <input
            id="repassword"
            type="password"
            onChange={onChangeRePassword}
            className="form-control"
          ></input>
        </div>
        </div>

        <div className="text-center card-footer">
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          <button
            disabled={apiProgress || (!password || password !== repassword)}
            className="btn btn-primary"
          >
            Sing Up {apiProgress && <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>}
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}
