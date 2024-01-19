import React, { useContext } from "react";
import { Context } from "../index";
import { Link } from "react-router-dom";
import "./css/NavMenu.css";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  PRODUCT_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <div className="NavMenu sticky">
      <Link
        className="NavMenu-text"
        to={MAIN_ROUTE}
        onClick={() => {
          window.scroll({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        ПланиПИТ!
      </Link>
      {user.isAuth && user.role == "ADMIN" ? (
        <div className="Buttons">
          <Link
            className="linkstyle"
            to={ADMIN_ROUTE}
            onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <button className="NavMenu-authorization-button">
              Админ панель
            </button>
          </Link>

          <Link
            className="linkstyle"
            to={LOGIN_ROUTE}
            onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <button
              className="NavMenu-authorization-button"
              onClick={() => {
                user.setIsAuth(false);
                console.log(user.isAuth);
              }}
            >
              Выйти
            </button>
          </Link>
        </div>
      ) : user.isAuth && user.role == "USER" ? (
        <div className="Buttons">
          <Link
            className="linkstyle"
            to={BASKET_ROUTE}
            onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <button className="NavMenu-authorization-button">
              Корзина
            </button>
          </Link>

          <Link
            className="linkstyle"
            to={LOGIN_ROUTE}
            onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <button
              className="NavMenu-authorization-button"
              onClick={() => {
                user.setIsAuth(false);
                console.log(user.isAuth);
              }}
            >
              Выйти
            </button>
          </Link>
        </div>
      ) : (
        <Link
          className="linkstyle"
          to={LOGIN_ROUTE}
          onClick={() => {
            window.scroll({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <button
            className="NavMenu-authorization-button"
            onClick={() => {
              
            }}
          >
            Авторизоваться
          </button>
        </Link>
      )}
    </div>
  );
});

export default NavBar;
