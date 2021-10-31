import React from "react";
import { Link } from "react-router-dom";
import backupData from "../backupData";

const Stocks = (props) => {

    const apiKey = props.api;

    const url = `https://financialmodelingprep.com/api/v3/actives?apikey=${apiKey}`;



    console.log(url)
    
    const [stocks, setStocks] = React.useState()

    const getStocks = async () => {
        let data
        const response = await fetch(url);
        if (response.ok){
            data = await response.json();
            console.log(data);
        }
        else{
            console.log("fetch returned error, using backup data");
            data = backupData}
        setStocks(data)
    }; 



    React.useEffect(()=>{

        console.log("Using effect")
        getStocks();
    }, []);



    const loaded = () =>{
        const stockElements = stocks.map((ele,index)=>{
            
            return(
                
                    <tr className={index % 2 === 0 ? "even" : "odd"} key={index}>
                        <td className="left-align radius-3"><Link className="white-text bold" to={`/stocks/${ele.ticker}`}>
                        {ele.companyName}
                        </Link>
                        </td>
                        <td className="radius-3">{ele.ticker}</td>
                        <td className="radius-3">{ele.price}</td>
                        <td className="radius-3">{ele.changesPercentage}</td>
                    </tr>
                
            )
        })
        return(
            <div>
            <table>
            <thead>
                <tr>
                <th className="left-align radius-3">Company</th>
                <th className="radius-3">Symbol</th>
                <th className="radius-3">Price</th>
                <th className="radius-3">% Change</th>
                </tr>
            </thead>
            <tbody>
            {stockElements}
            </tbody>
        </table>
            </div>
        )
    }

    const loading = ()=>{
        return(<h1>Loading Content</h1>)
    }

  return (
    stocks ? loaded() : loading()
  )
};

export default Stocks