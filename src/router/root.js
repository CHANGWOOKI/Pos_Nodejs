// router/root.js
import { createBrowserRouter} from "react-router-dom";
import Layout from "../pages/common/layout";
import OrderRouter from "./orderRouter";
import SaleRouter from "./saleRouter";
import Login from "../pages/common/login";
import Index from "../pages/common/index";
import SalesRegister from "../pages/sale/SaleRegiste";
import OrderRegister from "../pages/order/OrderRegiste";

const Root = createBrowserRouter([
  {
    path: '/',  // 로그인 페이지
    element: <Login />,
  },
  {
    path: '/',  // 공통 레이아웃 적용
    element: <Layout />,
    children: [
      {
        path: 'index',  // 메인 페이지
        element: <Index />,
      },
      {
        path: 'sale',  // 판매관리
        children : SaleRouter(),
      },
      {
        path: 'order',  // 본사입출관리
        children : OrderRouter(),
      }
    ],
  },
  // {
  //   path: '*',  // 잘못된 경로 접근 시 로그인 페이지로 리다이렉트
  //   element: <Navigate to="/" replace />,
  // },
]);

export default Root;
