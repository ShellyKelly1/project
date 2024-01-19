import React from "react";
import { useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE } from "../utils/consts";
import "./css/Auth.css";
import { Link } from "react-router-dom";
import { observer } from 'mobx-react-lite';

const Auth = observer(() => {
  const location = useLocation();
  console.log(location);
  const isLogin = location.pathname === LOGIN_ROUTE;
  return (
    <div className="Auth">
      <div className="Auth-form">
        <p className="Auth-form-label">
          {isLogin ? "Авторизация" : "Регистрация"}
        </p>

        <div className="Auth-form-inputDiv">
          <div className="Auth-form-firstInputDiv">
            <p className="Auth-form-username">Логин</p>
            <input type="text"  className="Auth-form-input" />
          </div>
          <div className="Auth-form-secondInputDiv">
            <p className="Auth-form-username">Пароль</p>
            <input type="text"  className="Auth-form-input" />
          </div>
        </div>
        <button className="Auth-form-login">
          {isLogin ? "Войти" : "Зарегистрироваться"}
        </button>
        <div className="Auth-form-registration">
          {isLogin ? (
            <p className="Auth-form-registration-text">
              Нет аккаунта?{" "}
              <Link
                to={REGISTRATION_ROUTE}
                onClick={() => {
                  window.scroll({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Зарегистрируйся!
              </Link>
            </p>
          ) : (
            <p className="Auth-form-registration-text">
              Есть аккаунт?{" "}
              <Link
                to={LOGIN_ROUTE}
                onClick={() => {
                  window.scroll({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Войти!
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
});

export default Auth;
