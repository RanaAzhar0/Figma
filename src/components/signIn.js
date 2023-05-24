import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {

    const inputValue={
        name:"",
        email:"",
        password:""
      }
    
      const [Data,setData]=React.useState(inputValue)
    
      console.log(Data,"data");
    
      const handleChange=(e)=>{
    
        setData({
          ...Data,[e.target.name]:e.target.value
        })
    
      }
    
      const navigate=useNavigate("")

      const handleSubmit=()=>{

        if(Data.name !="" && Data.email !="" && Data.password !=""){
          alert("congragulation")
          navigate("/signUp")

        }
        else{
          alert("sorry")
        }

      }

    
    
    return(
        <>
            <h1 className="text-4xl font-bold pb-5"> Helloooo Worlddd</h1>
            <input type="text" placeholder="Enter Name" name="name" onChange={handleChange}/>
            <input type="text" placeholder="Enter Email" name="email" onChange={handleChange}/>
            <input type="text" placeholder="Enter Password" name="password" onChange={handleChange}/>
            <button onClick={handleSubmit}>Submite</button>
        </>
    )
}
export default SignIn