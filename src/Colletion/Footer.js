import React from "react";

export default function Footer() {
  return (
    <footer>
      <span
        className="has-text-weight-semibold has-text-orange"
        style={{ display: "inline-block" }}
      >
        <i class="fa-regular fa-copyright"></i> Animekuns
      </span>
      <h1 className="has-text-orange" style={{ display: "inline-block" }}>
        Disfruta del anime Online
      </h1>

      <h3
        style={{
          color: "#363636",
          marginLeft: "20px",
          fontWeight: "100",
        }}
      >
        Ningún vídeo se encuentra alojado en nuestros servidores.
      </h3>
    </footer>
  );
}
