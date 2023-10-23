import React from "react";
import  email from  "./Images/icons8-email-20.png";
import  telegram from  "./Images/icons8-telegram-20.png";

function Contactme() {
  return (
    <section className="contactsection" id="contact">
      <div>
        <h2>CONTACT ME</h2>
        <p className="subtitle">Get in touch</p>
      </div>
      <div>
        <p>
          Are you interested in my services,working with me or hiring me for a
          full-time role? you can contact me via my social media handles or
          through the mediums below.
        </p>
      </div>
      <div className="contactbtn">
        <a href="mailto: nwajiudo@gmail.com" target="_blank" rel="noreferrer">
          <button>
            <img
              src={email}
              alt="email"
              className="emailicon"
            />
            Email Me
          </button>
        </a>
        <a href="https://t.me/heiskingsxn" target="_blank" rel="noreferrer">
          <button>
            <img
              src={telegram}
              alt="telegram"
              className="messageicon"
            />
            Message
          </button>
        </a>
      </div>
    </section>
  );
}

export default Contactme;
