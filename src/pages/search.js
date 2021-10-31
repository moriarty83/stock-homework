import React, {useState} from "react";
import { useHistory } from "react-router";
import Circle from "../components/circle";



const Search = (props) => {
    const [form, setForm] = useState({symbol: ''})
    const baseClass = "circle bkground-4 border-1";
    const [myClass, setMyClass] = React.useState(baseClass);

    const mouseEnter = ()=>{
        setMyClass((baseClass + " focused"))
    }
    const mouseLeave = ()=>{
        setMyClass(baseClass)
    }

    const formRef = React.useRef();
    const history = useHistory();

    function handleChange(event){
        setForm({...form, [event.target.name]: event.target.value});
        }

    const handleSubmit = (event)=>{
        event.preventDefault();
        const symbol = form.symbol;
        history.push(`/stocks/${symbol}`);
        setForm({symbol: ''});
    }
  return (
  <div className="flex space-around wrap center-content margin-03">
        <div className={myClass} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <form onSubmit={handleSubmit} ref={formRef} >
                <input type="text" name="symbol" id="symbol" value={form.symbol} onChange={handleChange} required/>
                <input type="submit" value="Lookup" />
            </form>
        </div>
  </div>);
};

export default Search;