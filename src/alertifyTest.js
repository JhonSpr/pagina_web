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
  constructor(props,href1,href2,href3,href4,href5,href6,href7,href8,href9,href10,anime1,anime2,anime3,anime4,anime5,anime6,anime7,anime8,anime9,anime10,img1,img2,img3,
    img4,img5,img6,img7,img8,img9,img10,alt1,alt2,alt3,alt4,alt5,alt6,alt7,alt8,alt9,alt10,year1,year2,year3,year4,year5,year6,year7,year8,year9,year10,
    emision,tv,hrefNoticia1,noticia1,imgNoticia1,imgNoticia2,imgNoticia3,imgNoticia4,hrefNoticia2,hrefNoticia3,hrefNoticia4,noticia2,noticia3,noticia4) {
    super(props,href1,href2,href3,href4,href5,href6,href7,href8,href9,href10,anime1,anime2,anime3,anime4,anime5,anime6,anime7,anime8,anime9,anime10,img1,img2,img3,
        img4,img5,img6,img7,img8,img9,img10,alt1,alt2,alt3,alt4,alt5,alt6,alt7,alt8,alt9,alt10,year1,year2,year3,year4,year5,year6,year7,year8,year9,year10,
        emision,tv,hrefNoticia1,noticia1,imgNoticia1,imgNoticia2,imgNoticia3,imgNoticia4,hrefNoticia2,hrefNoticia3,hrefNoticia4,noticia2,noticia3,noticia4);

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
    alertify.alert("Custom Heading", "This is an alert dialog.", function() {
      // Optional side effect
      alertify.message("OK");
    });
  }

  handleOkCancelConfirmation() {
    alertify.confirm(
      "Custom Heading",
      "This is a confirm dialog.",
      function() {
        alertify.success("Ok");
      },
      function() {
        alertify.error("Cancel");
      }
    );
  }

  handlePrompt() {
    alertify.prompt(
      "Custom Heading",
      "This is a prompt dialog.",
      "Default value",
      function(evt, value) {
        alertify.success("Ok: " + value);
      },
      function() {
        alertify.error("Cancel");
      }
    );
  }

  render() {
    return (
      <React.Fragment>
       

       <li className='navbar-item item-nav' >
            <a className='nav-link item-nav' onClick={this.handleError}>Peliculas</a>
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
