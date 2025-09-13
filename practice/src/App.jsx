import "./App.css";
import {useState} from "react";
function App(){
  const [count,setCount]=useState(0)
  /*const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")*/
  const [formData,setFormData]=useState({
    email:"",
    password:""
  })
  const handleEmail=(event)=>{
    setEmail(event.target.value)

  }
  const handlePassword=(event)=>{
    setPassword(event.target.value)

  }
  const handleIncrement=()=>{
    //setCount()
    setCount((prevCount)=>prevCount+1)
    console.log(count)
  }

  const handleClick=(name)=>{
    //alert("hello "+name)
    alert(`hello ${name}`)
  }
  const handleChange=(event)=>{
    //console.log(event.target.name)
    //console.log(event.target.value)
    setFormData(
      {
        ...formData,
        [event.target.name]:event.target.value

      }
    )
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    alert(`Email: " ${formData.email} \n Password: ${formData.password} \n submiited`)
  }
  return(
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <form onSubmit={handleSubmit}>
      <p>button</p>
      <input type="text" name="email" placeholder="type" onChange={handleChange}></input><br/>
      <input type="password" name="Password" placeholder="enter" onChange={handleChange}></input><br/>
      <button type="submit">Login</button>
      
</form>
    </div>
  )
}
export default App;
