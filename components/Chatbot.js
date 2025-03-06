import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.chatIcon} onClick={() => setIsOpen(!isOpen)}>
        💬
      </div>
      {isOpen && (
        <div className={styles.chatContainer}>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/e8uUzaq59z-8QN1tgOkhc"
            allow="microphone"
          ></iframe>
        </div>
      )}
    </>
  );
}
