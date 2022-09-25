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

class AlertifyTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSimpleMessage() {
    // default notification
    // Shorthand for:
    // alertify.notify( message, [type, wait, callback]);
    alertify.message("Normal message");
  }

  handleSuccess() {
    // success notification
    // Shorthand for:
    // alertify.notify( message, 'success', [wait, callback]);
    alertify.success("Success message");
  }

  handleError() {
    // error notification
    // Shorthand for:
    // alertify.notify( message, 'error', [wait, callback]);
    alertify.error("Proximamente");
  }

  handleWarning() {
    // warning notification
    // Shorthand for:
    // alertify.notify( message, 'warning', [wait, callback]);
    alertify.warning("Warning message");
  }

  handleAlertBoxClick() {
    alertify.alert("Custom Heading", "This is an alert dialog.", function () {
      // Optional side effect
      alertify.message("OK");
    });
  }

  handleOkCancelConfirmation() {
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
  }

  handlePrompt() {
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
  }

  render() {
    return (
      <React.Fragment>
        <li className="navbar-item item-nav" style={{ display: "block" }}>
          <a className="nav-link item-nav" onClick={this.handleError}>
            Peliculas
          </a>
        </li>

        {/* <button onClick={this.handleSuccess}>Ver</button>
        <br />
        <button onClick={this.handleError}>Error Message</button>
        <br />
        <button onClick={this.handleWarning}>Warning Message</button>
        <br /> */}
      </React.Fragment>
    );
  }
}

export default AlertifyTest;
