import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
// import { selectShowSearchOverlay } from 'store/slices/core/selectors';
// import { setShowSearchOverlay } from 'store/slices/core/slice';
// import { setPatientSearch } from 'store/slices/sessions/slice';
import styles from './search-input.module.css';

const SearchInput = () => {
  const dispatch = useDispatch();
  // const showSearchOverlay = useSelector(selectShowSearchOverlay);
  const showSearchOverlay = false;
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e && e.preventDefault) e.preventDefault();
    // e.target.value.length > 0 && dispatch(setPatientSearch(e.target.value));
    setValue(e.target.value);
  };

  // useEffect(() => {
  //   if (!showSearchOverlay && value.length > 0) {
  //     setValue('');
  //   } else if (showSearchOverlay && value.length === 0) {
  //     // dispatch(setShowSearchOverlay(false));
  //   }
  // }, [dispatch, showSearchOverlay, value]);

  const onClear = () => {
    setValue('');
  };

  return (
    <div className={styles.input_wrapper}>
      <BsSearch className={styles.search_icon} />
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
        spellCheck={false}
        data-testid="search-input"
      />
      {value.length > 0 && (
        <RxCross2
          className={styles.cancel}
          onClick={onClear}
          data-testid="clear-input-icon"
        />
      )}
    </div>
  );
};

export default SearchInput;
