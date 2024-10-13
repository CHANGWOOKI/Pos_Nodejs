import { Outlet } from 'react-router-dom';  // Outlet을 사용하여 하위 경로 렌더링
import Header from '../../components/layout/header';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;