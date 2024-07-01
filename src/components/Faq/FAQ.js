import React, { useState } from "react";
import styles from './FAQ.module.css'

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={`${styles.faq} ${faq.open ? styles.open : ""}`}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className={styles.faqHeader}>
        <div className={styles.faqNumber}>{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>
        <div className={styles.faqQuestion}>{faq.question}</div>
        <div className={styles.faqIcon}>{faq.open ? "x" : "+"}</div>
      </div>
      <div className={styles.faqAnswer}>{faq.answer}</div>
    </div>
  );
};

const FAQSection = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Where Can I Watch?",
      answer:
        "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore ismod nulla.",
      open: true,
    },
    {
      question: "Where Can I Watch?",
      answer:
        "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore ismod nulla.",
      open: false,
    },
    {
      question: "Where Can I Watch?",
      answer:
        "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore ismod nulla.",
      open: false,
    },
    {
      question: "Where Can I Watch?",
      answer:
        "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore ismod nulla.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className={styles.faqSection}>
      <h2 className={styles.faqHeading}>FAQ'S</h2>
      <div className={styles.faqs}>
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
