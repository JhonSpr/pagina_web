/* eslint-disable jsx-a11y/anchor-is-valid */
import alertify from "alertifyjs";
export function AlertErrores({ mensaje }) {
  const handleError = () => {
    alertify.error("No disponible");
  };

  return (
    <>
      <a className="dropdown-item" onClick={handleError}>
        <i className="fa-solid fa-lock" style={{ marginRight: "6px" }}></i>
        {mensaje}
      </a>
    </>
  );
}
