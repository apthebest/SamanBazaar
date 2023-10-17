import { useState,useContext } from "react"
import React from 'react'
import { items } from "./resources/data";



const AppContext = React.createContext();

const AppProvider = ({children})=>{
    const [cartItems,setCartItems] = useState([]);
    const [modal,setModal] = useState('');
    const [showSidebar,setShowSidebar] = useState(false);
    const [products,setProducts] = useState(items);
    const showItemByCategory = (category) => {
        if(category === 'All'){
            setProducts(items);
        }
        else
        {
        const newProducts = items.filter(item=>item.category === category);
        setProducts(newProducts);
        }
    }

    const toggleSidebar = function(){
        setShowSidebar(!showSidebar);
    }

   //function to remove an item from cart
   const removeCartItem = (id) =>{
    const newCart = cartItems.filter((item)=>item.id!==id);
    setCartItems(newCart);
   }

   //method to close the modal

return( 
<AppContext.Provider value = {{cartItems,setCartItems,modal,setModal,removeCartItem,showSidebar,toggleSidebar,showItemByCategory,products,setShowSidebar}}>
    {children}
</AppContext.Provider>
);
    
}

export const useGlobalContext = ()=>{
    return useContext(AppContext);
}
export default AppProvider;