import { FiHeart as HeartIcon } from 'react-icons/fi';
import { GoPaperAirplane as ShareIcon } from 'react-icons/go';
import { LuUserCircle as ProfileIcon } from 'react-icons/lu';
import styles from './styles.module.css';
import '../assets/global.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.header}>
          <img src="assets/images/bp-logo.png" />
          <span className="color-blue">blueprint</span> blog
        </h1>

        <ProfileIcon size={24} />
        <div className={styles.headerRow}>
          <p className={styles.username}>rbeggs</p>
          <p className={styles.date}>September 19</p>
        </div>
        <p>
          In response to the growing homelessness crisis in San Francisco, a
          local nonprofit organization, Code Tenderloin, has launched a
          comprehensive initiative aimed at providing long-term solutions for
          individuals experiencing homelessness. The organization, founded in
          2015, is dedicated to addressing both immediate needs and underlying
          causes of homelessness through a combination of shelter services, job
          training programs, and mental health support. Read more online:
          https://www.codetenderloin.org/
        </p>

        <img
          src="https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg"
          className={styles.image}
        />

        <div className={styles.iconRow}>
          <HeartIcon size={24} />
          <p className={styles.username}>256 Likes</p>
          <ShareIcon size={24} />
        </div>

        <div className={styles.comment}>
          <ProfileIcon size={24} className={styles.profileIcon} />
          <div className={styles.commentContent}>
            <div className={styles.commentHeader}>
              <p className={styles.username}>daviddd</p>
              <p className={styles.date}>September 20</p>
            </div>
            <p>
              This organization is doing amazing work tackling the complex root
              causes of the issue.
            </p>
          </div>
        </div>

        <div className={styles.comment}>
          <ProfileIcon size={24} className={styles.profileIcon} />
          <div className={styles.commentContent}>
            <div className={styles.commentHeader}>
              <p className={styles.username}>vppraggie</p>
              <p className={styles.date}>September 21</p>
            </div>
            <p>Thanks for sharing!</p>
          </div>
        </div>
      </div>
    </main>
  );
}
