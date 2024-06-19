import React from "react";
import sucess from "./sucess.svg";

const Sucess = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'white', borderRadius: '8px', border: '1px solid white', padding: '0 10px' }}>
      <img style={{ cursor: 'pointer', width: '50px', height: '50px' }} src={sucess} alt="sucess" />
      <p style={{ justifyContent: 'center', margin: '12px', fontSize: '20px', fontWeight: "500px" }}>Account has been activated successfully.</p>
    </div>
  );
};

export default Sucess;
