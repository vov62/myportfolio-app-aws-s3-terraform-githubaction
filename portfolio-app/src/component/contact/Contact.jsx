import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp, BsGithub } from "react-icons/bs";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ccsusvv",
        "template_037q0jn",
        form.current,
        "vFp9Q0jEmtjGMLyn-"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("email was sent successfully");
          e.target.reset();
        },
        (error) => {
          toast.error("email sent failed");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <a
            href="mailto:avivovgen1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-option"
          >
            <MdOutlineEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>avivovgen1@gmail.com</h5> Send a message
          </a>

          <a
            href="https://api.WhatsApp.com/send?phone=+972525213250"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-option"
          >
            <BsWhatsapp className="contact-option-icon" />
            <h4>WhatsApp</h4>
            <h5>*123456789</h5>
            Message Me
          </a>

          <a
            href="https://github.com/vov62"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-option"
          >
            <BsGithub className="contact-option-icon" />
            <h4>Github</h4>
            <h5>view</h5>
            Visit Github
          </a>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="full name.." required />
          <input type="email" name="email" placeholder="email.." required />
          <textarea
            name="message"
            placeholder="your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="formBtn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
