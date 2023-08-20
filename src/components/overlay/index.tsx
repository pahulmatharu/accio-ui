import { throttle } from 'utils/helpers';
import styles from './overlay.module.css';

export type IProps = {
  onMouseMove?: () => void;
  children: JSX.Element;
};

const Overlay = ({ onMouseMove, children }: IProps) => {
  const throttledMouseMove = throttle(
    onMouseMove ? onMouseMove : () => {},
    1000,
  );

  return (
    <div className={styles.root} onMouseMove={throttledMouseMove}>
      <div className={styles.overlay_root}>{children}</div>
    </div>
  );
};

export default Overlay;
