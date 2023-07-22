import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        'service_ngegl2j',
        'template_on201gq',
        formRef.current,
        'qDUicVXIOxmVy0rMb'
      );
      console.log(result.text);
    } catch (error) {
      console.log(error.text);
    }
  };

  return (
    <section id="contact">
      <h2 className="experience__title">Contact Me</h2>
      <hr className="divider" style={{ margin: "" }} />
      <div className="container-c contact__container">
        <div className="contact__options">
          <div className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <a style={{ color: "#7da47db0" }} href="mailto:rawkingsley@gmail.com">Send a message</a>
          </div>
          <div className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <a style={{ color: "#7da47db0" }} href="https://api.whatsapp.com/send?phone=4917670111130">
              Send a message
            </a>
          </div>
        </div>
        <form ref={formRef} onSubmit={sendEmail}>
          <label htmlFor="user_name">Name</label>
          <input type="text" id="user_name" name="user_name" />
          <label htmlFor="user_email">Email</label>
          <input type="email" id="user_email" name="user_email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
          <button className='btn-contact' type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
