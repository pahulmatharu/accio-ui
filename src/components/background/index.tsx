import styles from './background.module.css';

const Background = () => {
  return (
    <video className={styles.video} playsInline autoPlay muted loop id="bgvid">
      <source
        src="https://biobot.io/wp-content/uploads/2021/08/hero-bg.mp4"
        type="video/mp4"
      ></source>
    </video>
  );
};

export default Background;
