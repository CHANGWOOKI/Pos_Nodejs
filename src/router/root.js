import { createBrowserRouter} from "react-router-dom";

import OrderRouter from "./orderRouter";
import SalesRouter from "./saleRouter";
import OrderRegiste from "../pages/order/OrderRegiste";
import SalesRegiste from "../pages/sale/SaleRegiste";
import Index from "../pages/common";

const Root = createBrowserRouter([
  { path : '/',
    element : <Index />,
  },
  { path : 'sale',
    element : <SalesRegiste />,
    children : SalesRouter(),
  },
  { path : 'order',
    element : <OrderRegiste />,
    children : OrderRouter(),
  },
]);

export default Root;