function Button(props){

    return(
        <button
        style={{backgroundColor:props.color}}
        onclick={props.onClickButton}    
            
        >
        {props.text}
        </button>
    )
}

export default Button