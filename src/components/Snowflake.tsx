import styles from './styles/Snowflake.module.scss';

const Snowflake = () => {
  return (
    <div className={`min-h-screen w-full sm:w-6/12 z-10 ${styles['snowflake-wrapper']}`}>
      {Array(100)
        .fill(true)
        .map((_, i) => {
          return (
            <div className={styles.snowflake} key={i}>
              {i % 2 === 0 ? '❄' : '❅'}
            </div>
          );
        })}
    </div>
  );
};

export default Snowflake;
