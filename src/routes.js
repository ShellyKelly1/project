import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import ProductPage from "./pages/ProductPage";
import Auth from "./pages/Auth";
import Main from "./pages/main";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  PRODUCT_ROUTE,
  REGISTRATION_ROUTE,
  ADD_DISH_ROUTE,
} from "./utils/consts";
import AddDish from "./pages/AddDish";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <Admin />,
  },
  {
    path: BASKET_ROUTE,
    Component: <Basket />,
  },
  {
    path: ADD_DISH_ROUTE,
    Component: <AddDish />,
  },
];
//
export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: <Main />,
  },

  {
    path: LOGIN_ROUTE,
    Component: <Auth />,
  },

  {
    path: REGISTRATION_ROUTE,
    Component: <Auth />,
  },
  {
    path: PRODUCT_ROUTE + "/:id",
    Component: <ProductPage />,
  },
];
