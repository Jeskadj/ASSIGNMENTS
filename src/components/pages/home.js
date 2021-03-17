import Button from '../appcomponent/button';
import Navbar from '../appcomponent/navbar';
import Checkbox from '../appcomponent/checkbox';
import Inputfield from '../appcomponent/inputfield';
import Textarea from '../appcomponent/textarea';
import Selectoption from '../appcomponent/selectoption';
import Radiobutton from '../appcomponent/radiobutton';
import Typotext from '../appcomponent/typotext';
import React ,{useState} from 'react';

function Home(){

    const [color,setColor]=useState('black')
    const [text,setText]=useState()
    
    
   function changeColorText(){
       setColor('violet')
       setText('hi')
   }   
    
    
    return(

    <div>
        <Navbar text="whizzy Academy" color="red"></Navbar>
        <h1>My Components</h1>
        {/* <Button text="clear" color="orange"></Button> */}
        <Button text="Login" color="yellow"></Button>
        <Button text="Cancel" color="brown"></Button>
        <Button text="Submit" color="pink"></Button>
        <Button text ={text}  color="purple"></Button>
        

        <Button text={text} color={color} onClickButton={changeColorText}></Button>
        
        <Typotext fontSize={15} color="pink" text="This is a form"> </Typotext>
        
        <Selectoption />
        
        

        <Radiobutton type="radio" /> <span>Male</span>

        <Radiobutton type="radio" /> <span>female</span>


<input type="checkbox"/>

<input type="number"/>
<input type="password"/>
<input type="radio"/>
<input type="text"/>


        <Textarea />
    
   
   
  <Inputfield label="username" type="text"/>
  <Inputfield label="password" type="password"/>
   
   <Checkbox/>
<label for="rating1">Excellent</label>  
 <Checkbox/>
 <label for="rating2">Very Good</label>
 <Checkbox />
 <label for="rating3">Fair</label>
 <Checkbox/>
 <label for="rating4">Bad</label> 
    
    
  <Textarea color="purple" width="350px" margin="10px 5px" 
  border="10px" padding="15px"></Textarea>  <span>comments</span>
    


</div>
    )
}


export default Home