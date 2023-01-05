import React from "react";

export default function LoadingSearch() {
  return (
    <div
      className="container_spinner"
      style={{ color: "#fff", textAlign: "center", marginTop: "10px" }}
    >
      <div className="fa-solid fa-spinner fa-pulse" role="status"></div>
    </div>
  );
}
