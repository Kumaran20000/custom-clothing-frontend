function Cart({cart}){


return(

<div>

<h1>
Your Cart
</h1>


{
cart.map(item=>(

<div key={item.id}>

<h3>
{item.name}
</h3>

<p>
₹{item.price}
</p>


</div>

))

}


</div>

)

}


export default Cart;