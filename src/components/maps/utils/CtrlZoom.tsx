import { useMap } from 'react-naver-maps';

export default function CtrlZoom() {
  const map = useMap();
  map?.setZoom(17, true);
  return null;
}
