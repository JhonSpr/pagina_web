/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * Author: Alex Chau
 * Date: 8 March 2019
 *
 * Description:
 *    Test Alertify functionalities
 */
import React from "react";
import alertify from "alertifyjs";
import { useAuth0 } from "@auth0/auth0-react";

function AlertNoLogged({ props }) {
  const { isAuthenticated } = useAuth0();
  // eslint-disable-next-line no-unused-vars
  const handleSimpleMessage = () => {
    // default notification
    // Shorthand for:
    // alertify.notify( message, [type, wait, callback]);
    alertify.message("Normal message");
  };
  // eslint-disable-next-line no-unused-vars
  const handleSuccess = () => {
    // success notification
    // Shorthand for:
    // alertify.notify( message, 'success', [wait, callback]);
    alertify.success("Success message");
  };

  const handleError = () => {
    // error notification
    // Shorthand for:
    // alertify.notify( message, 'error', [wait, callback]);
    alertify.error("Necesitas estar logeado");
  };
  // eslint-disable-next-line no-unused-vars
  const handleWarning = () => {
    // warning notification
    // Shorthand for:
    // alertify.notify( message, 'warning', [wait, callback]);
    alertify.warning("Warning message");
  };
  // eslint-disable-next-line no-unused-vars
  const handleAlertBoxClick = () => {
    alertify.alert("Custom Heading", "This is an alert dialog.", function () {
      // Optional side effect
      alertify.message("OK");
    });
  };
  // eslint-disable-next-line no-unused-vars
  const handleOkCancelConfirmation = () => {
    alertify.confirm(
      "Custom Heading",
      "This is a confirm dialog.",
      function () {
        alertify.success("Ok");
      },
      function () {
        alertify.error("Cancel");
      }
    );
  };

  // eslint-disable-next-line no-unused-vars
  const handlePrompt = () => {
    alertify.prompt(
      "Custom Heading",
      "This is a prompt dialog.",
      "Default value",
      function (evt, value) {
        alertify.success("Ok: " + value);
      },
      function () {
        alertify.error("Cancel");
      }
    );
  };

  return (
    <React.Fragment>
      {isAuthenticated ? (
        <li className="navbar-item item-nav" style={{ display: "block" }}>
          <a className="nav-link item-nav" href="/peliculas">
            Peliculas
          </a>
        </li>
      ) : (
        <li className="navbar-item item-nav" style={{ display: "block" }}>
          <a className="nav-link item-nav" onClick={handleError}>
            Peliculas
          </a>
        </li>
      )}

      {/* <button onClick={this.handleSuccess}>Ver</button>
        <br />
        <button onClick={this.handleError}>Error Message</button>
        <br />
        <button onClick={this.handleWarning}>Warning Message</button>
        <br /> */}
    </React.Fragment>
  );
}

export default AlertNoLogged;
