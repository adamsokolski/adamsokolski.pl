import { useEffect, useState } from "react";
import { Linkedin, GitHub } from "react-feather";
import styles from "../../styles/LinksBox.module.css";
import confetti from "canvas-confetti";
import * as gtag from "../../lib/gtag";

const Contact = ({ translationsObj }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const success = () => {
    confetti({
      particleCount: 150,
      spread: 180,
      origin: { x: 0 },
    });
  };

  async function handleOnSubmit(e) {
    e.preventDefault();
    setEmailSent(true);

    gtag.event({
      action: "submit_form",
      category: "Contact",
      label: "message",
      value: `${name}-${email}:${message}}`,
    });

    const data = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (field.name) {
        data[field.name] = field.value;
      }
    });

    const res = await fetch("api/email", {
      method: "post",
      body: JSON.stringify(data),
    });

    if (res.statusText == "OK") {
      success();
      setName("");
      setEmail("");
      setMessage("");
    }
  }
  return (
    <div className="contact">
      <h2>{translationsObj.contactTitle}</h2>
      <h3>
        adam.sokolski23@gmail.com{" "}
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/adam-sok%C3%B3lski-bb4370199/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin strokeWidth="2px" />
        </a>
        <a
          className={styles.link}
          href="https://github.com/idKrazu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub strokeWidth="2px" />
        </a>
      </h3>
      <form method="post" onSubmit={handleOnSubmit}>
        <p>
          <label htmlFor="name">{translationsObj.contactName}</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </p>
        <p>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="message">{translationsObj.contactMessage}</label>
          <textarea
            name="message"
            required
            minLength={20}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </p>
        <input
          className="mainButton"
          type="submit"
          value={translationsObj.contactSubmit}
          disabled={emailSent}
        />
      </form>
    </div>
  );
};

export default Contact;
