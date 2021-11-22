import React from 'react'
import ContactForm from "../contactForm/ContactForm"
import "./ContactModal.css"
const ContactModal = () => {
      const confirmHandler = () => {
        props.onConfirm();
      };

      const cancelHandler = () => {
        props.onCancel();
      };
    return (
      <div className="contact_modal">
        <ContactForm/>
        <button onClick={cancelHandler}>
       
          {/* <Link to={url} key={id}></Link> */}
        </button>
        <button onClick={confirmHandler}>Back to Library</button>
      </div>
    );
}

export default ContactModal
