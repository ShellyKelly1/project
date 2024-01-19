import React, {useContext} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import UserStore from "../store/UserStore";
import { Context } from "../index";
import { observer } from 'mobx-react-lite';


const AppRouter = observer(() => {
    const { user } = useContext(Context);
    console.log(user)
  return (
    <Routes>
      <Route>
        {user.isAuth &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={Component} exact />
          ))}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} exact />
        ))}
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
});

export default AppRouter;
