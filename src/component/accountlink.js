import './accountlink.css'

function Accountlink(props) {
    return(
        <a onClick={props.navigate} style={{marginTop:props.marginTop ,
        cursor:props.cursor, textDecoration:props.textDecoration , 
        color:props.color , marginBottom:props.marginBottom}} className='accountclass'>
            {props.text}</a>
    )
    
}

export default Accountlink;