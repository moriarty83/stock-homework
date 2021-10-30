import React from "react";
import { Link } from "react-router-dom";


const Hamburger = (props) =>{
    const [myClass, setMyClass] = React.useState("hidden");

    const mouseEnter = ()=>{
        setMyClass("")
    }
    const mouseLeave = ()=>{
        setMyClass("hidden")
    }
    return(
        <div id="hamburger" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <img className="width-1 height-1" src="./hamburger.png" alt="hamburger menu" />
                <div className={myClass} id="burger-links">
                    <Link to="/">
                        <div>Home</div>
                    </Link>
                    <Link to="/about">
                        <div>About</div>
                    </Link>
                    <Link to="/stocks">
                        <div>Stocks</div>
                    </Link>
                </div>
        </div>
    )
}

export default Hamburger