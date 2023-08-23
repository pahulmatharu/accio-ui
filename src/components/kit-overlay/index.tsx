import Overlay from 'components/overlay';
import { Kit } from 'models/kit';

type props = {
  kit: Kit;
};

const KitOverlay = ({ kit }: props) => {
  return (
    <Overlay>
      <div>test</div>
    </Overlay>
  );
};

export default KitOverlay;
