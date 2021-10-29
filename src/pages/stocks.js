import React from "react";
import { Link } from "react-router-dom";
import backupData from "../backupData";

const Stocks = (props) => {

    const apiKey = props.api;

    const url = `https://financialmodelingprep.com/api/v3/actives?apikey=${apiKey}`;

    // isLive is a bool that is adjusted if the API is working or not. 
    // if islive is false, a message saying the data is not current will be displayed.
    let stocksLive = false;

    console.log(url)
    
    const [stocks, setStocks] = React.useState("null")

    const getStocks = async () => {
        let data
        const response = await fetch(url);
        if (response.ok){
            stocksLive = true;
            data = await response.json();
            console.log(data);
        }
        else{
            stocksLive = false;
            console.log("fetch returned error, using backup data");
            data = backupData}
        setStocks(data.map((ele,index)=>{
            return(
                
                
                    <tr className={index % 2 === 0 ? "even" : "odd"} key={index}>
                        <td className="left-align radius-3"><Link className="black-text" to={`/stocks/${ele.ticker}`}>
                        {ele.companyName}
                        </Link>
                        </td>
                        <td className="radius-3">{ele.ticker}</td>
                        <td className="radius-3">{ele.price}</td>
                        <td className="radius-3">{ele.changesPercentage}</td>
                    </tr>
                
            )
        }))
    }; 



    React.useEffect(()=>{

        console.log("Using effect")
        getStocks();
    }, []);



    const loaded = () =>{
        return(
            <div>
            <table>
            <thead>
                <th className="left-align radius-3">Company</th>
                <th className="radius-3">Symbol</th>
                <th className="radius-3">Price</th>
                <th className="radius-3">% Change</th>
            </thead>
            <tbody>
            {stocks}
            </tbody>
        </table>
            </div>
        )
    }

    const loading = ()=>{
        <h1>Loading Content</h1>
    }

  return (
    stocks ? loaded() : loading()
  )
};

export default Stocks