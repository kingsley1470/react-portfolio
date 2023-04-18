// import { Component } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";

 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ngegl2j', 'template_on201gq', form.current, 'qDUicVXIOxmVy0rMb')
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
          <a style={{color: "#7da47db0"}} href="mailto:rawkingsley@gmail.com">Send a message</a>
        </div>
        <div className="contact__option">
          <RiWhatsappLine className="contact__option-icon" />
          <h4>Whatsapp</h4>
          <a style={{color: "#7da47db0"}} href="https://api.whatsapp.com/send?phone=4917670111130">
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
      <button className='btn-contact' onClick={{Contact}}>Send</button>
    </form>
    </div>
     </section>
  );
};


export default Contact;