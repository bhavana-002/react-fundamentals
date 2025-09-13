import "./ProductCard.css"

function ProductCard(product){
    
    return (
        <div>
        <p>  productName={product.productName}</p>
        <p>price={product.price}</p>
         
       <p>{product.isAvailable===true? <p className="title3">in stock</p>:<p className="title4">Out of stock</p>}</p>
        </div>
    )
}
export default ProductCard;