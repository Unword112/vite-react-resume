import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import styles from "./styles.module.css";

import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function ContactBar() {
  const [textCopy, setTextCopy] = useState("nathakith.bao@spumail.net");
  const [istextCopy, setistextCopy] = useState(false);

  const copyText = () => {
    setTextCopy("Copied!");
    setistextCopy(true);
    setTimeout(() => {
      setTextCopy("nathakith.bao@spumail.net");
      setistextCopy(false);
    }, 2000);
  };

  return (
    <div className={styles.contact_bar_wrapper}>
      <div className={styles.contact_bar}>
        <a
          href="https://www.linkedin.com/in/nathakith-baosalee-7959752ba"
          target="_blank"
          className={styles.icon}
        >
          <LinkedInIcon />{" "}
        </a>
        <a
          href="https://www.github.com/Unword112"
          target="_blank"
          className={styles.icon}
        >
          <GitHubIcon />
        </a>
        <CopyToClipboard text={textCopy} onCopy={copyText}>
          <a className={styles.icon}>
            <AlternateEmailIcon />
          </a>
        </CopyToClipboard>
        {istextCopy && (
          <div className="text-copied">Text copied to clipboard!</div>
        )}
        <div className={styles.line}></div>
      </div>
      <div className={styles.contact_bar}>
        <div className={styles.emailWrapper}>
          <a href="mailto:mccalvinky@gmail.com" className={styles.email}>
            nathakith.bao@spumail.net
          </a>
        </div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default ContactBar;
