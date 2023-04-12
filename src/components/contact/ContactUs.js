import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
        
    <h2 className="experienct__title" >Contact Me</h2>
    <hr
      className="divider"
      style={{
        margin: "auto"
      }}
    />
    <div className="container-c contact__container">
      <div className="contact__options">
        <div className="contact__option">
          <MdOutlineEmail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>rawkingsley@gmail.com</h5>
          <a href="mailto:rawkingsley@gmail.com">Send a message</a>
        </div>
        <div className="contact__option">
          <RiWhatsappLine className="contact__option-icon" />
          <h4>Whatsapp</h4>
          <h5>+4917670111130</h5>
          <a href="https://api.whatsapp.com/send?phone=4917670111130">
            Send a message
          </a>
        </div>
      </div>
     
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
     </section>
  );
};