import React,{useState,useEffect,useContext} from 'react'
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthNavBar from '../components/AuthNavBar';
import AuthContext from "../customHooks/auth-context";
import {NavLink,Redirect,useHistory} from 'react-router-dom';

function Layout({setuser,children}) {

    const history=useHistory();

    const auth = useContext(AuthContext);

    const [authSuccess, setauthSuccess] = useState(false)

    useEffect(() => {
        setauthSuccess(auth.status);
     }, [auth.status])

     if(authSuccess){
        history.push("/cart");
    }else{
        history.push("/");
     }

    return (
        <>
        {
           authSuccess?
            <AuthNavBar setuser={setuser}/>
            :
            <NavBar setuser={setuser}/>
        }
            {children}
            <Footer/>
        </>
    );
}

export default Layout;