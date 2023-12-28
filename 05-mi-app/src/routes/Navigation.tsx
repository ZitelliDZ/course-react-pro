import {
  BrowserRouter,
  Route,
  NavLink,
  Routes,
  Navigate,
} from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";
import { Suspense } from "react";

const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="logo" />
            <ul>
              {routes.map((route) => {
                return (
                  <li key={route.to}>
                    <NavLink to={route.to} className={({ isActive }) => isActive ? "nav-active" : "" } > {route.name} </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Routes>
            {routes.map((route) => {
              return (
                <Route key={route.to} path={route.path} element={<route.Component />} />
              );
            })}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default Navigation;
