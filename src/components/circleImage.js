import React from "react";

const CircleImage = (props) =>{
    const [myClass, setMyClass] = React.useState(props.baseClass);

    const mouseEnter = ()=>{
        setMyClass((props.baseClass + " focused"))
    }
    const mouseLeave = ()=>{
        setMyClass(props.baseClass)
    }
    return(
        <img className={myClass} src={props.content} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}/>
    )
}

export default CircleImage