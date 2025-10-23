import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="main-nav">
      <ul>
        <li className={isActive("/dashboard") || location.pathname === "/" ? "active" : ""}>
          <NavLink to="/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li className={isActive("/collections") ? "active" : ""}>
          <NavLink to="/collections">
            Collections
          </NavLink>
        </li>
        <li className={isActive("/posts") ? "active" : ""}>
          <NavLink to="/posts">
            Posts
          </NavLink>
        </li>
        <li className={isActive("/profile") ? "active" : ""}>
          <NavLink to="/profile">
            Profile
          </NavLink>
        </li>
        <li className={isActive("/settings") ? "active" : ""}>
          <NavLink to="/settings">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
