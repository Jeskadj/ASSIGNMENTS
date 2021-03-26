import './button.css'

function Button(props){


return(
    <button className='buttonclass'
     style={{backgroundColor:props.color ,marginTop:props.marginTop, boxShadow:props.boxShadow, outline:props.outline,
        border:props.border,width:props.width, height:props.height,justifySelf:props.justifySelf,cursor:props.cursor,
        borderStyle:props.borderStyle ,borderRadius:props.borderRadius,boxShadow:props.boxShadow ,hover:props.hover,}}
     onClick={props.onclickButton}>{props.text}</button>

)
}

export default Button
