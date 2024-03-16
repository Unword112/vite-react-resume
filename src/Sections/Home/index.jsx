import styles from "./styles.module.css";

function Home() {
  return (
    <section className={styles.home_section} id="home">
      <div className={styles.left}>
        <p className={styles.greet}>Hi, my name is</p>
        <h1 className={styles.heading_1}>Nathakith Baosalee</h1>
        <h1 className={styles.heading_3}>SPU Sripatum University</h1>
        <h1 className={styles.heading_4}>
          Bachelor of Engineering (Computer Engineering)
        </h1>
      </div>
      <div className={styles.right}>
        <img
          src="./Images/profile-picture.jpg"
          alt="profile"
          className={styles.profile_img}
        />
      </div>
    </section>
  );
}

export default Home;
