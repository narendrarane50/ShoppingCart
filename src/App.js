import React, { useState, useEffect, lazy, Suspense} from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';
import AuthContext from "./customHooks/auth-context";

const Routes = lazy(() => import('./Routes/Route'));
const Layout = lazy(() => import('./Routes/Layout'));

function App() {

const [cartProduct, setcartProduct] = useState([]);
const [wishProduct, setwishProduct] = useState([]);

  const [userData, setuser] = useState(JSON.parse(localStorage.getItem("user")));
  const [authstatus, setauthstatus] = useState(false);

  useEffect(() => {
    if (userData) {
      setauthstatus(true);
    } else {
      setauthstatus(false);
    }
  }, [userData])


  return (
    <>
      <AuthContext.Provider 
      value={{ 
          status: authstatus ,
          user:userData,
          cartProduct:cartProduct,
          setCartProduct:setcartProduct,
          wishProduct:wishProduct,
          setWishProduct:setwishProduct
        }}
        >
        <Suspense fallback={<div className="div-center" style={{height:'100vh',width:'100vw'}}>Loading...</div>}>
          <Router>
            <Layout setuser={setuser}>
              <Route component={Routes} />
            </Layout>
          </Router>
        </Suspense>
      </AuthContext.Provider>
    </>
  );
}

export default App;

