import React from "react";

export function SingUp() {
  return (
    <>
      <h1>Sing Up</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username"></input>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email"></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password"></input>
      </div>
    </>
  );
}
