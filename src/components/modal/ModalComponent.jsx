import React from "react";

export default function ModalComponent({header, footer, onClick}) {
  return (
    <div className="modal-container" style={{position: "relative", border: "1px solid grey", borderRadius: "8px", padding: "10px"}}>
        <span onClick={onClick} style={{cursor: "pointer", position: "absolute", right: "5px", top: 5}}>X</span>
      <div className="header">
        <p style={{ textAlign: "center" }}>{header || "Sign In"}</p>
      </div>
      <div
        className="body"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "white",
          justifyContent: "center",
          gap: "10px",
          margin: "20px"
        }}
      >
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="password" />
        <button style={{padding: "5px", backgroundColor: "gray"}}>Sign In</button>
      </div>
      <div className="footer" style={{textAlign: "center", padding: "10px"}}>
        {<p style={{ textAlign: "center" }}>{footer? footer: "Footer"}</p>}
      </div>
    </div>
  );
}
