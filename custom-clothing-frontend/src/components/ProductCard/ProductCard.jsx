function ProductCard({product, addToCart}){


return(

<div className="card" style={{width:"18rem"}}>


<img 
src={product.image}
className="card-img-top"
/>


<div className="card-body">


<h5>
{product.name}
</h5>


<p>
₹ {product.price}
</p>


<button 
className="btn btn-primary"
onClick={()=>addToCart(product)}
>

Add To Cart

</button>


</div>


</div>

)

}


export default ProductCard;