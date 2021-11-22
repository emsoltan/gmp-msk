import React from 'react'
import "./ContactForm.css"
const ContactForm = () => {
    return (
      <div className="contact_modal">
        <label htmlFor="Name">Name</label>
        <input type="text" placeholder="Name" />
      </div>
    );
}

export default ContactForm
