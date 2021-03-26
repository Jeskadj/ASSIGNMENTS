import Inputfield from "../component/inputfield";
import Button from "../component/button";
import Accountlink from "../component/accountlink";
import {useHistory} from "react-router-dom";
import {useState} from 'react';

function Signin() {

    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    
    

    let history=useHistory()
    function goTopage(path) {
         history.push(path)
    }
     function updateUsername(e) {
         setUsername(e.target.value)
    }
    function updatePassword(e) {
        setPassword(e.target.value)
    }
    function submit(e) {
        e.preventDefault();
        

       
        
        
    }
    return(
        <div className='wholepage2'>
            <form className='formitself2'>
            <div className='inputareas2'>
                 <div className='greeting'>
                   <p>
                    <h1>WELCOME</h1>
                   </p>
                </div> 
                <div className='inputfields'>

                <Inputfield placeholder='Username' cursor='pointer' color='white' borderStyle='outset'  width={190}
                 height={20} type='Username' border='none' borderRadius={5}
                 marginBottom={10} onChange={updateUsername}  outline='none'/> 
                  <Inputfield placeholder='Password' cursor='pointer' color='' borderRadius={5}  width={190} outline='none'
                 height={20} type='password' border='none' borderStyle='outset' margin='' onChange={updatePassword} 
                 />
                </div>

                <div className='buttonlink'>


                  <Button cursor='pointer' color='#83c5be' borderRadius={5}  justifySelf='center' outline='none' 
                 height={30} width={80} text='Sign in' border='none' boxShadow='-2px 2px 5px pink' marginTop={10} 
                 />
                  <Accountlink text="Create an account" cursor='pointer' textDecoration='underline' color='#006d77'
                 height='' type='' border='' boxshadow='' marginTop={10}  navigate={()=>{goTopage('/signup')}}
                 padding=''/>
                </div>
            </div>
           </form>
        </div>
    )
    
}

export default Signin