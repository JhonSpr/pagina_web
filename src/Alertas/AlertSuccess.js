/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import alertify from "alertifyjs";
function AlertSuccess({ mensaje }) {
  const handleSuccess = () => {
    alertify.success("Success message");
  };
  return <a onClick={handleSuccess}>{mensaje}</a>;
}

export default AlertSuccess;
