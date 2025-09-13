import "./ProductCard.css"

function ProductCard(person){
    
    return (
        <div className="container">
        <p className="title">productName : {person.product}</p>
        <p className="title1">price : {person.price}</p>
       <p>{person.isAvailable===true? <p className="title3">in stock</p>:<p className="title4">Out of stock</p>}</p>
        </div>
    )
}
export default ProductCard;