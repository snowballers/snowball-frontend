import styles from './styles/Snowflake.module.scss';

const Snowflake = () => {
  return (
    <div className={styles.snowflakeWrapper}>
      {Array(100)
        .fill(true)
        .map((_, i) => (
          <div className={styles.snowflake} key={i}>
            ❅
          </div>
        ))}
    </div>
  );
};

export default Snowflake;
