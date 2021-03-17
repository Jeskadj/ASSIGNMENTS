 function Textarea(props){

     return(
         
         <input type="textarea" style={{backgroundColor:props.color,
            width:props.width,height:props.height,
            padding:props.padding ,borderRadius:props.borderRadius, 
            margin:props.margin}}>
            
            {props.text}
            </input>) 
       
         }
              
       export default Textarea