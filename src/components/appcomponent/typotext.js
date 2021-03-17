function Typotext(props){

    return(
        
        <p style={{color:props.color,
            fontSize:props.font
              
            }}>
            
            {props.text}
           
            </p> 
  
        
    )
}

export default Typotext