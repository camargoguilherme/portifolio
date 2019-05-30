import React, { Component } from 'react';
import ItemForm from '../ItemForm';

// import { Container } from './styles';

class Form extends Component {
  state = {
    inputs:[
      {
        label: "Name",
        id: "name",
        type: "text",
        message: "Please enter your name."
      },
      {
        label: "Email Address",
        id: "email",
        type: "email",
        message: "Please enter your email address."
      },
      {
        label: "Phone Number",
        id: "phone",
        type: "tel",
        message: "Please enter your phone number."
      },
      {
        label: "Message",
        id: "message",
        type: "",
        message: "Please enter a message."
      }
    ]
  }

  render(){
    return (
      <div className="row">
          <div className="col-lg-8 mx-auto">
            {/* <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. --> */}
            <form name="sentMessage" id="contactForm" novalidate="novalidate">
              {
                this.state.inputs.map( (item, index) =>{
                  return <ItemForm key={index} className="control-group" >{item}</ItemForm>
                })
              }
              <br />
              <div id="success"></div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
              </div>
            </form>
          </div>
        </div>
    );
  }
}
export default Form;