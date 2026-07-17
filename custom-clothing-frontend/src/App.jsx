import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../src/components/NavBar/Navbar";
import Home from "../src/pages/Home/Home";
import Shop from "../src/pages/Shop/Shop";
import Customize from "../src/pages/Cutomize/Cutomize";
import Cart from "../src/pages/Cart/Cart";

import { useState } from "react";




function App(){


    const [cart,setCart]=useState([]);
   const addToCart=(product)=>{

        setCart([...cart,product]);

    };



return(

<BrowserRouter>


<Navbar cartCount={cart.length}/>


<Routes>


<Route path="/" element={<Home/>}/>


<Route 
path="/shop" 
element={
<Shop addToCart={addToCart}/>
}
/>


<Route path="/customize" element={<Customize/>}/>


<Route 
path="/cart" 
element={<Cart cart={cart}/>} 
/>



</Routes>


</BrowserRouter>

)


}


export default App;