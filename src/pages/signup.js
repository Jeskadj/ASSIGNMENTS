import './signupin.css';
import {Link} from "react-router-dom";
import Button  from '../component/button';
import Inputfield from '../component/inputfield';
import Accountlink from '../component/accountlink';
import image from '../pages/image/formpic.jpeg'


function Signup(){
    return(
        <div className="wholepage">
          <form className="formitself">
           <div className="inputareas">
              
                {/* <div className="introclass"> */}
                    <img style={{width:200 , height:200}}src={image} alt="dressingarea"/>
                 <p style={{fontStyle:'oblique',fontFamily:'serif'}}>
                   <h1>Register with us</h1>
                 </p>
                {/* </div> */}
                
              {/* <div classname='inputfields2'> */}

                <Inputfield placeholder='Username' cursor='pointer' color='' borderRadius={10} fontStyle="oblique" fontFamily='serif'
                 backgroundColor='#F6FF7A' type='Username' border='none' boxShadow= '0px 0px 0px 0px #A3AB30' margin='' outline='none'
                 padding={5}/>
                  <Inputfield placeholder='Password' cursor='pointer' backgroundColor='#F6FF7A' borderRadius={10}
                 height='' type='Password' border='none' boxShadow='0px 0px 0px 0px #A3AB30'  margin='' outline='none'
                 padding={5} marginTop={10}/>
                  <Inputfield placeholder='Confirm Password' cursor='pointer' backgroundColor='#F6FF7A' borderRadius={10}
                 height='' type='Confirm Password' border='none'  margin='' outline='none' boxShadow='0px 0px 0px 0px #A3AB30 '
                 padding={5} marginTop={10}/>
                  <Button  cursor='pointer' color='' borderRadius={10}
                 height={28} width={68} text='Sign Up' border='' boxShadow='-2px 2px 4px 3px #B15EF7' marginTop={10} 
                 padding=''/>
                 <Accountlink cursor='pointer' text='Forgot Password' marginTop={10} color='blue' textDecoration='underline' marginBottom={10}/>
                 <Link to="/">
                     <p cursor='pointer'>Already have an account? Log in</p>
                 </Link>
              {/* </div> */}
              
             </div>   
            </form>
        </div>
        
    )
}

export default Signup