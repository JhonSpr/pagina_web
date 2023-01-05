/* eslint-disable jsx-a11y/anchor-is-valid */
import alertify from "alertifyjs";
export function AlertError({ mensaje }) {
  const handleError = () => {
    // error notification
    // Shorthand for:
    // alertify.notify( message, 'error', [wait, callback]);
    alertify.error(mensaje);
  };

  return (
    <>
      <a
        className="dropdown-item"
        onClick={handleError}
        style={{ textAlign: "center" }}
      >
        <i className="fa-solid fa-lock" style={{ marginRight: "6px" }}></i>
        {mensaje}
      </a>
    </>
  );
}
