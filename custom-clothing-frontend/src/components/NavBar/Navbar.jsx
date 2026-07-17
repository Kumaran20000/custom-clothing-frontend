import { Link } from "react-router-dom";

function Navbar({cartCount}){


return(

<nav>


<h2>
CustomWear
</h2>


<Link to="/shop">
Shop
</Link>


<Link to="/cart">

Cart ({cartCount})

</Link>


</nav>

)

}


export default Navbar;