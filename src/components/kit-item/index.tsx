import styles from './kit-item.module.css';
import { useDispatch } from 'react-redux';
import { Kit } from 'models/kit';
import { setSelectedKit } from 'store/core/slice';
import img1 from 'images/undraw_order_delivered_re_v4ab (1).svg';
import img2 from 'images/undraw_order_delivered_re_v4ab (2).svg';
import img3 from 'images/undraw_order_delivered_re_v4ab (3).svg';
import img4 from 'images/undraw_order_delivered_re_v4ab.svg';

type props = {
  kit: Kit;
};

const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getImage = () => {
  const number = randomIntFromInterval(1, 4);
  switch (number) {
    case 1:
      return img1;
    case 2:
      return img2;
    case 3:
      return img3;
    case 4:
      return img4;
    default:
      return img1;
  }
};

const KitItem = ({ kit }: props) => {
  const dispatch = useDispatch();
  const setKit = () => {
    dispatch(setSelectedKit(kit));
  };
  const img = getImage();
  return (
    <div className={styles.search_card_item} key={kit.id} onClick={setKit}>
      <div className={styles.img_section}>
        <img className={styles.img} src={img} alt="logo" />
      </div>
      <div className={styles.kit_info_section}>
        <div className={styles.label_id}>{kit.label_id}</div>
        <div className={styles.trackingCode}>
          Fedex: {kit.shipping_tracking_code}
        </div>
      </div>
    </div>
  );
};

export default KitItem;
