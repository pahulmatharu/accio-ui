import { useState, useEffect } from 'react';
import styles from './dashboard.module.css';
import SearchInput from 'components/search-input';
import { FilterType } from 'models/filter-type';
import { GetKitsService } from '../../api/setup/setup';
import { Kit } from 'models/kit';
import KitItem from 'components/kit-item';
import { useSelector } from 'react-redux';
import { selectSelectedKit } from 'store/core/selectors';
import KitOverlay from 'components/kit-overlay';

const Dashboard = () => {
  const [currentSearch, setCurrentSearch] = useState('');
  const [kits, setKits] = useState<Kit[]>([]);
  const [filterType, setFilterType] = useState(FilterType.LABEL_ID);
  const selectedKit = useSelector(selectSelectedKit);
  const setLabelId = () => {
    setFilterType(FilterType.LABEL_ID);
    setCurrentSearch('');
  };

  const setShippingCode = () => {
    setFilterType(FilterType.SHIPPING_CODE);
    setCurrentSearch('');
  };

  useEffect(() => {
    const getValues = async () => {
      const kitsService = GetKitsService();
      const values = await kitsService.searchKits(filterType, currentSearch);
      setKits(values);
    };
    if (currentSearch.length > 0) {
      getValues();
    }
  }, [currentSearch, filterType]);

  return (
    <div className={styles.root}>
      {selectedKit && <KitOverlay kit={selectedKit} />}
      <h1 className={styles.header}>Find your Kit!</h1>
      <p className={styles.subheader}>
        Enter your FedEx tracking number or your Kit's identifier to see the
        shipping status
      </p>
      <div className={styles.filter_wrapper}>
        <div className={styles.filter_wrapper_item} onClick={setLabelId}>
          <input
            type="radio"
            className={styles.filterType}
            checked={filterType === FilterType.LABEL_ID}
          />
          <label htmlFor="regular">Kit Identifier</label>
        </div>
        <div className={styles.filter_wrapper_item} onClick={setShippingCode}>
          <input
            type="radio"
            className={styles.filterType}
            checked={filterType === FilterType.SHIPPING_CODE}
          />
          <label htmlFor="shippingCode">FedEx Tracking Number</label>
        </div>
      </div>
      <div className={styles.search_wrapper}>
        <SearchInput value={currentSearch} setValue={setCurrentSearch} />
      </div>
      <div className={styles.search_card_wrapper}>
        {kits.length > 0 && kits.map((x) => <KitItem kit={x} />)}
      </div>
    </div>
  );
};

export default Dashboard;
