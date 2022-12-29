import React from "react";

export default function LoadingSearch() {
  return (
    <div
      className="container_spinner"
      style={{ color: "#fff", textAlign: "center", marginTop: "10px" }}
    >
      <div className="spinner-border" role="status">
        <span
          style={{
            color: "rgba(26 26 26 0.5)",
            fontSize: "11px",
            width: "10px",
          }}
        ></span>
      </div>
    </div>
  );
}
