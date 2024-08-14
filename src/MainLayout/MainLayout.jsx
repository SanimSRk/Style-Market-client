import { Outlet } from 'react-router-dom';
import Naver from '../Compment/Naver/Naver';

const MainLayout = () => {
  return (
    <div>
      <Naver></Naver>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
