import logo from 'images/logo.svg';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.root}>
      <img className={styles.img} src={logo} alt="logo" />
    </div>
  );
};

export default Navbar;
