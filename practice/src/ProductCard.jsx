

function ProductCard({product,price,isAvailable}){
    
    return (
        <>
        <p>This is profile</p>
        <p>productName : {product}</p>
        <p>price : {price}</p>
        <p>{isAvailable===true?"in stock":"Out of stock"}</p>
        </>
    )
}
export default ProductCard;