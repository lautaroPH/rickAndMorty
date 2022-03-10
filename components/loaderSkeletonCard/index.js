import styles from './styles.module.css';

const LoaderSkeletonCard = () => {
  return (
    <>
      <div className={styles.skeletonContainer}>
        <div className={styles.skeletonImg}></div>
        <div className={styles.titleContainer}>
          <div className={styles.title}></div>
        </div>
      </div>
      <div className={styles.skeletonContainer}>
        <div className={styles.skeletonImg}></div>
        <div className={styles.titleContainer}>
          <div className={styles.title}></div>
        </div>
      </div>
      <div className={styles.skeletonContainer}>
        <div className={styles.skeletonImg}></div>
        <div className={styles.titleContainer}>
          <div className={styles.title}></div>
        </div>
      </div>
      <div className={styles.skeletonContainer}>
        <div className={styles.skeletonImg}></div>
        <div className={styles.titleContainer}>
          <div className={styles.title}></div>
        </div>
      </div>
    </>
  );
};

export default LoaderSkeletonCard;
