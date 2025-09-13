/*import ProductCard from "./ProductCard.jsx";*/
import "./App.css";
import UserAvatar from "./UserAvatar.jsx";
function App() {
  /*let person={
     productName1:"chocolate",
     productName2:"lappy",
     price :1000,
      isAvailable : true,
      Available: false
  }*/
  let person1={
    personName:"Bhavana",
    Course:"B.tech Cse",
    RollNo:"23VV1A0502",
    BloodGroup:"B+ve",
    DOB:"15/08/2005"
  }
  
 

  return (
    /*<div className="maincontainer">
      <ProductCard product={person.productName1} price={person.price} isAvailable={person.isAvailable}/>
      <ProductCard product={person.productName2} price={person.price} isAvailable={person.Available}/>

    </div>*/
    <div className="maincontainer">
      <UserAvatar personName={person1.personName} Course={person1.Course} RollNo={person1.RollNo} BloodGroup={person1.BloodGroup} DOB={person1.DOB}/>
    </div>
  )
}

export default App
