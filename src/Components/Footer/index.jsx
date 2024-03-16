import styles from "./styles.module.css";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <footer className={styles.footer_container}>
      <h1 className={styles.text}>Contact Me</h1>

      <a
        href="https://www.linkedin.com/in/nathakith-baosalee"
        className={styles.icon}
      >
        <LinkedInIcon /> <span>www.linkedin.com/in/nathakith-baosalee</span>
      </a>
      <a
        href="https://www.github.com/Unword112"
        target="_blank"
        className={styles.icon}
      >
        <GitHubIcon /> <span>www.github.com/Unword112</span>
      </a>
      <a href="/" target="_blank" className={styles.icon}>
        <AlternateEmailIcon /> <span>nathakith.bao@spumail.net</span>
      </a>
    </footer>
  );
}

export default Footer;
