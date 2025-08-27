import { useState } from "react";
import styles from "./MenuButton.module.css";
import rightIcon from "src/assets/right.png";
import storyImage from "src/assets/story.png";
import lakeImage from "src/assets/lake.png";
import learnImage from "src/assets/learn.png";
import ratingImage from "src/assets/rating.png";
import contactImage from "src/assets/contact.png";
import eventsImage from "src/assets/events.png";
import { motion } from "framer-motion";
export default function ToggleMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <motion.button
        id="menuToggleBtn"
        className={styles.rightIcon}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={rightIcon.src}
          alt="Right Icon"
          className={`${styles.rightIconImage} ${
            isOpen ? styles.iconRotated : styles.iconDefault
          }`}
        />
      </motion.button>

      <motion.div className={isOpen ? styles.menuOpen : styles.menuClosed}>
        <div id="menuContent" className={styles.menu}>
          <button className={styles.button}>
            <a href="/story" className={styles.menuItem}>
              <img
                src={storyImage.src}
                alt="Story"
                className={`${styles.newsImage} ${styles.iconImage}`}
              />
            </a>
          </button>
          <button className={styles.button}>
            <a href="/lake" className={styles.menuItem}>
              <img
                src={lakeImage.src}
                alt="Lake"
                className={`${styles.lakeImage} ${styles.iconImage}`}
              />
            </a>
          </button>

          <button className={styles.button}>
            <a href="/learn" className={styles.menuItem}>
              <img
                src={learnImage.src}
                alt="Learn"
                className={`${styles.learnImage} ${styles.iconImage}`}
              />
            </a>
          </button>

          <button className={styles.button}>
            <a href="/rating" className={styles.menuItem}>
              <img
                src={ratingImage.src}
                alt="Rating"
                className={`${styles.ratingImage} ${styles.iconImage}`}
              />
            </a>
          </button>
          <button className={styles.button}>
            <a href="/contacts" className={styles.menuItem}>
              <img
                src={contactImage.src}
                alt="Contacts"
                className={`${styles.contactImage} ${styles.iconImage}`}
              />
            </a>
          </button>
          <button className={styles.button}>
            <a href="/events" className={styles.menuItem}>
              <img
                src={eventsImage.src}
                alt="Events"
                className={`${styles.eventsImage} ${styles.iconImage}`}
              />
            </a>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
