import React from "react";

export default function Loading() {
  return (
    <div className="container_spinner">
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
export function LoadingSearch() {
  return <div className="container_spinner">Cargando...</div>;
}
