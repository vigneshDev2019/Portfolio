import React, { useContext, useRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState("");
  const [error, setError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    setDone("");
    setError(false);
    if (phoneNumber.length == 10) {
    emailjs
      .sendForm(
        "service_qfq47pq",
        "template_m7u1ykx",
        form.current,
        "7jmll7pDNDl96v1ym"
      )
      .then(
        (result) => {
          setDone("Thanks for contact me :-)) ");
          setError(false);
          form.reset();
        },
        (error) => {
          setDone(error.text);
          setError(true);
          setTimeout(() => {
            setError(false);
            setDone("");
          }, 4000)
        }
      );
    } else {
      setError(true);
      setDone("Please enter the valid details :-(( ");
      setTimeout(() => {
        setError(false);
        setDone("");
      }, 4000)
    }
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            className="user"
            placeholder="Enter Name"
          />
          <input
            type="email"
            name="email"
            className="user"
            placeholder="Enter Email"
          />
          <PhoneInput
            className="user"
            defaultCountry="IN"
            style={{ background: "white" }}
            name="contact"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
          />
          <textarea name="message" className="user" placeholder="Enter Message" />
          <input type="submit" value="Send" className="button" />
          {done.length > 0 &&
            <span style={{color: error ? "red" : "white"}}>{done}</span>
          }
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
