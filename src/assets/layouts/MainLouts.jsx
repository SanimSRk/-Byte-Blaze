import { Outlet } from 'react-router-dom';
import Naver from '../../Compment/Naver';

const MainLouts = () => {
  return (
    <div>
      <Naver></Naver>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLouts;
