import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
// import { selectShowSearchOverlay } from 'store/slices/core/selectors';
// import { setShowSearchOverlay } from 'store/slices/core/slice';
// import { setPatientSearch } from 'store/slices/sessions/slice';
import styles from './search-input.module.css';
import { useDebounce } from 'utils/helpers';

type props = {
  setValue: (value: string) => void;
  value: string;
};

const SearchInput = ({ setValue, value }: props) => {
  const [currentValue, setCurrentValue] = useState(value);
  const onClear = () => {
    setValue('');
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e && e.preventDefault) e.preventDefault();
    setCurrentValue(e.target.value);
  };
  useDebounce(setValue, currentValue, 200);
  return (
    <div className={styles.input_wrapper}>
      <BsSearch className={styles.search_icon} />
      <input
        className={styles.input}
        type="text"
        placeholder="Search for your kit!"
        value={currentValue}
        onChange={onChange}
        spellCheck={false}
      />
      {currentValue.length > 0 && (
        <RxCross2 className={styles.cancel} onClick={onClear} />
      )}
    </div>
  );
};

export default SearchInput;
