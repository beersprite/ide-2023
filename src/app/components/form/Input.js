import styles from './input.module.css';

const MyImputs = ({ children, ...props }) => {
  return (
    <input className={styles.inputForm} {...props}>
      {children}
    </input>
  );
};

export default MyImputs;
