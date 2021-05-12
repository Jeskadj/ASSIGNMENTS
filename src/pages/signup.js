import Inputfield from '../components/inputfield';
import '../pages/signup.css';
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup() {
    let history= useHistory();

    const [values,setValues]=useState({})

     const updatevalues = (e)=> {
      setValues({...values,[e.target.name]:e.target.value})
     }
    
    
    function submit(e) {


        e.preventDefault();
        console.log(values)
        // setIsLoading(true)
        // let  user={username:user_name, password:userpass}
        let object = {values}
        console.log(object)
        let json_object = JSON.stringify(object) 
        // object here can be replaced with the values as above
        
        fetch('http://localhost:4000/api/v1/signup',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:json_object,
        })
        .then(response =>response.json())
        .then(data => {
            console.log(data);
            if (data.message){
                history.push('/Dashboard')
            }
            else{
                alert('error')
            }
        })
    

      
    
    }
    

    return(
        <div className="wholepage" >
            <form className="content">
               <div className="inputarena"> 
               <Inputfield  name="email" type="email" onChange={updatevalues}placeholder='Email'/>
               <Inputfield name="password" type="password" onChange={updatevalues} placeholder='Password'/>
               <Inputfield  name="confirm password" type="password" onChange={updatevalues}placeholder='Confirm Password'/>
               </div> 
                
                <div className ="buttonarena">
                    <button onClick={submit}>Submit</button>
                </div>   
            
            </form>
                
        </div>
    )
    
}
export default Signup;
