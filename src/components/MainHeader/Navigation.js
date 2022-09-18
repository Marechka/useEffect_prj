import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
  // useContext is more elegant to use with Context, better than Consumer
  const ctx = useContext(AuthContext);

  return (
    //<AuthContext.Consumer>
     // {/* ctx is a context data - object with isLoggedIn */}
     // {(ctx) => {
        <nav className={classes.nav}>
          <ul>
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <button onClick={ctx.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
   //   }}
   // </AuthContext.Consumer>
  );
};

export default Navigation;
