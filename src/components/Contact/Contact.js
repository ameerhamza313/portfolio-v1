import React, { useState } from "react";
import emailjs from "emailjs-com";
import contact1 from "./contact1.png";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear the error message when user starts typing
    setErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  const formSubmit = (event) => {
    event.preventDefault();

    // Form validation
    let valid = true;
    const newErrors = {
      fullname: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    };

    if (data.fullname.trim() === "") {
      valid = false;
      newErrors.fullname = "Full name is required";
    }

    if (data.phone.trim() === "") {
      valid = false;
      newErrors.phone = "Phone number is required";
    }

    if (data.email.trim() === "") {
      valid = false;
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/;
      if (!emailRegex.test(data.email)) {
        valid = false;
        newErrors.email = "Invalid email address";
      }
    }

    if (data.subject.trim() === "") {
      valid = false;
      newErrors.subject = "Subject is required";
    }

    if (data.message.trim() === "") {
      valid = false;
      newErrors.message = "Message is required";
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    // Send the email using EmailJS
    emailjs
      .send(
        "service_zd8dy7o", // Replace with your service ID
        "template_ipns3fb", // Replace with your template ID
        {
          fullname: data.fullname,
          phone: data.phone,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        "sp7Pj81e0ewvULQV6" // Replace with your user ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Email sent successfully!");

          // Reset the form fields
          setData({
            fullname: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Email sending failed:", error);
          alert("Email sending failed!");
        }
      );
  };

  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shadow">
                <div className="img">
                  <img src={contact1} alt="" />
                </div>
                <div className="details">
                  <h1>Ameerhamza Sanadi</h1>
                  <p>Full Stack Web Developer</p>
                  <p>Email: ameerhamzasanadi@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className="button f_flex icon-container">
                    <a
                      href="https://github.com/ameerhamza313"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn_shadow"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://linkedin.com/in/ameerhamza-sanadi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn_shadow"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="mailto:ameerhamzasanadi@gmail.com"
                      className="btn_shadow"
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="right box_shadow">
              <form onSubmit={formSubmit}>
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input
                      type="text"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                      required // Make this field mandatory
                    />
                    <span className="error">{errors.fullname}</span>
                  </div>
                  <div className="input row">
                    <span>PHONE NUMBER</span>
                    <input
                      type="tel"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                      required // Make this field mandatory
                    />
                    <span className="error">{errors.phone}</span>
                  </div>
                </div>
                <div className="input">
                  <span>EMAIL</span>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    required // Make this field mandatory
                  />
                  <span className="error">{errors.email}</span>
                </div>
                <div className="input">
                  <span>SUBJECT</span>
                  <input
                    type="text"
                    name="subject"
                    value={data.subject}
                    onChange={InputEvent}
                    required // Make this field mandatory
                  />
                  <span className="error">{errors.subject}</span>
                </div>
                <div className="input">
                  <span>YOUR MESSAGE</span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                    required // Make this field mandatory
                  ></textarea>
                  <span className="error">{errors.message}</span>
                </div>
                <button className="btn_shadow" type="submit">
                  SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
