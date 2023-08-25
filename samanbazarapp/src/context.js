import { useState,useEffect,useContext } from "react"
import React from 'react'

const AppContext = React.createContext();
const AppProvider = ({children})=>{
    const [cartItems,setCartItems] = useState([]);
   const [modal,setModal] = useState('');
    const [showSidebar,setShowSidebar] = useState(false);
    const closeSidebar = function(){
        setShowSidebar(false);
    }
    const openSidebar = function(){
        setShowSidebar(true);
    }
   //function to remove an item from cart
   const removeCartItem = (id) =>{
    const newCart = cartItems.filter((item)=>item.id!==id);
    setCartItems(newCart);
   }
return( 
<AppContext.Provider value = {{cartItems,setCartItems,modal,setModal,removeCartItem,closeSidebar,showSidebar,openSidebar}}>
    {children}
</AppContext.Provider>
);
    
}

export const useGlobalContext = ()=>{
    return useContext(AppContext);
}
export default AppProvider;