import { useState } from "react";
import styles from "./Collapse.module.sass";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.collapse}>
      <button
        className={`${styles.header} ${isOpen ? styles.headerOpen : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
          width="30"
          height="18"
          viewBox="0 0 30 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M2 16L15 3L28 16"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
}

export default Collapse;
