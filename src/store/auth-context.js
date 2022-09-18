import React from "react";

// all components wrapped into this Context will have access to isLoggedIn
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
