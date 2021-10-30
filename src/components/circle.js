import React from "react";


const Circle = (props) =>{
    const [myClass, setMyClass] = React.useState(props.baseClass);

    const mouseEnter = ()=>{
        setMyClass((props.baseClass + " focused"))
    }
    const mouseLeave = ()=>{
        setMyClass(props.baseClass)
    }
    return(
        <div className={myClass} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            {props.content}
        </div>
    )
}

export default Circle