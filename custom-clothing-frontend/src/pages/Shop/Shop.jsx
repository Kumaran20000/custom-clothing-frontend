import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";


function Shop({addToCart}){


return(

<div className="container">


<h1 className="mt-4">
Custom T-Shirts
</h1>


<div className="row">


{
products.map(product=>(


<div className="col-md-4 mb-4"
key={product.id}
>


<ProductCard

product={product}

addToCart={addToCart}

/>


</div>


))

}


</div>


</div>

)


}


export default Shop;