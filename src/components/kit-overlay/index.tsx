import Overlay from 'components/overlay';
import { Kit } from 'models/kit';
import styles from './kit-overlay.module.css';
import img from 'images/undraw_festivities_tvvj.svg';
import { useDispatch } from 'react-redux';
import { RxCross2 } from 'react-icons/rx';
import { setSelectedKit } from 'store/core/slice';

type props = {
  kit: Kit;
};

const KitOverlay = ({ kit }: props) => {
  const dispatch = useDispatch();
  const clear = () => {
    dispatch(setSelectedKit(undefined));
  };
  return (
    <Overlay>
      <div className={styles.root}>
        <img className={styles.img} src={img} alt="success" />
        <div>We found it. Eventually show shipping status here</div>
        <RxCross2 className={styles.close} onClick={clear} />
      </div>
    </Overlay>
  );
};

export default KitOverlay;
