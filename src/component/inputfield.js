function Inputfield(props){


return(
   <input placeholder={props.placeholder} type={props.type} 
   style={{backgroundColor:props.backgroundColor,boxShadow:props.boxShadow,borderRadius:props.borderRadius,outline:props.outline,
    width:props.width, height:props.height,marginBottom:props.marginBottom, border:props.border ,marginTop:props.marginTop,
    borderStyle:props.borderStyle,cursor:props.cursor, padding:props.padding , fontFamily:props.fontFamily, fontStyle:props.fontStyle}}  >
        
    </input>
    

)
}

export default Inputfield
