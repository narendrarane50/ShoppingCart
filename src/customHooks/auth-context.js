import React from 'react';

const authContext = React.createContext({
    status:null,
    user:{},
    cartProduct:[],
    wishProduct:[],
    setCartProduct:()=>{},
    setWishProduct:()=>{}
});

export default authContext;
