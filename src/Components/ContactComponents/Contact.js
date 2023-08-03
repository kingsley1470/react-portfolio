import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";

const Contact = () => {
  const formRef = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_ngegl2j",
        "template_on201gq",
        formData,
        "qDUicVXIOxmVy0rMb"
      );
      console.log("Email sent successfully!");
      setIsFormSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section id="contact" className="contact-container-A">
      <h2 className="experience__title">Contact Me</h2>
      <div className="container-c contact__container">
        {isFormSubmitted ? (
          <div>
            <h3>Thank you for your message!</h3>
            <p>I'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <div>
            <div className="contact__options">
              <div className="contact__option">
                <MdOutlineEmail className="contact__option-icon" />
                <h4>Email</h4>
                <a
                  style={{ color: "#7da47db0" }}
                  href="mailto:rawkingsley@gmail.com"
                >
                  Send a message
                </a>
              </div>
              <div className="contact__option">
                <RiWhatsappLine className="contact__option-icon" />
                <h4>Whatsapp</h4>
                <a
                  style={{ color: "#7da47db0" }}
                  href="https://api.whatsapp.com/send?phone=4917670111130"
                >
                  Send a message
                </a>
              </div>
            </div>
            <form ref={formRef} onSubmit={sendEmail}>
              <label htmlFor="user_name">Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={formData.user_name}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="user_email">Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={formData.user_email}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <button className="btn-contact" type="button" onClick={sendEmail}>
                Send
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
