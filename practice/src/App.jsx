import ProductCard from "./ProductCard.jsx";
function App() {
  
    const productName ="Lappy"
    const price =1000
    const  isAvailable = true
  
 

  return (
    <>
      <ProductCard product={productName} price={price} isAvailable={isAvailable}/>
    </>
  )
}

export default App
