import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useState } from "react";



const Nav = (props) => {

    const formRef = React.useRef();
    const history = useHistory();

    const [form, setForm] = useState({symbol: ''})

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
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/about">
                <div>About</div>
            </Link>
            <Link to="/stocks">
                <div>Stocks</div>
            </Link>
            <form onSubmit={handleSubmit} ref={formRef}>
                <input type="text" name="symbol" id="symbol" value={form.symbol} onChange={handleChange}/>
                <input type="submit" value="Lookup" />
            </form>
            
        </div>
    )
}

export default Nav