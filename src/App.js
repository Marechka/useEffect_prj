import React, {useContext} from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext)
 // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // we would end up wtih infinite loop, so we need UseEffect

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
  //   // this will get executed AFTER each component is reevaluated and only if dependecis change
  //   // when app runs forst time useEffect runs, but since dependencies are not changed, it doesn't run the second time, so we stay logged in
  //   if (storedUserLoggedInInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  return (
    <React.Fragment>
      {/* <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}
      > */}
        <MainHeader />
        <main>
          {!ctx.isLoggedIn && <Login/>}
          {ctx.isLoggedIn && <Home/>}
        </main>
      {/* </AuthContext.Provider> */}
    </React.Fragment>
  );
}

export default App;
