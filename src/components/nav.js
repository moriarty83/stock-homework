import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useState } from "react";
import Hamburger from "./hamburger";



const Nav = (props) => {

    const formRef = React.useRef();
    const history = useHistory();

    const [form, setForm] = useState({symbol: ''})

    const [redirect, setRedirect] = useState();

    function handleChange(event){
        setForm({...form, [event.target.name]: event.target.value});
      }
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        const symbol = form.symbol;
        history.push(`/stocks/${symbol}`)
        setForm({symbol: ''})
    }
    return (
        <div className="nav">
            <Hamburger />
            <Link className="nav-link" to="/">
                <div>Home</div>
            </Link>
            <Link className="nav-link" to="/about">
                <div>About</div>
            </Link>
            <Link className="nav-link" to="/stocks">
                <div>Stocks</div>
            </Link>
            <form className="nav-link" onSubmit={handleSubmit} ref={formRef}>
                <input type="text" name="symbol" id="symbol" value={form.symbol} onChange={handleChange}/>
                <input type="submit" value="Lookup" />
            </form>
            
        </div>
    )
}

export default Nav