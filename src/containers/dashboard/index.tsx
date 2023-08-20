import styles from './dashboard.module.css';
import SearchInput from 'components/search-input';

const Dashboard = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.header}>Where is your Kit!</h1>
      <p className={styles.subheader}>
        Enter your FedEx tracking number or your Kit's identifier to see the
        shipping status
      </p>
      <div className={styles.search_wrapper}>
        <SearchInput />
      </div>
      <div className={styles.search_card_wrapper}>
        <div className={styles.search_card_item}></div>
      </div>
    </div>
  );
};

export default Dashboard;
