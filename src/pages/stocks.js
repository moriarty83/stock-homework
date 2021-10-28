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
                
                
                    <tr key={index}>
                        <td className="left-align"><Link to={`/stocks/${ele.ticker}`}>
                        {ele.companyName}
                        </Link>
                        </td>
                        <td>{ele.ticker}</td>
                        <td>{ele.price}</td>
                        <td>{ele.changesPercentage}</td>
                    </tr>
                
            )
        }))
    }; 



    React.useEffect(()=>{

        console.log("Using effect")
        getStocks();
    }, []);




  return (
      <div>
    <table>
    <thead>
        <th className="left-align">Company</th>
        <th>Symbol</th>
        <th>Price</th>
        <th>% Change</th>
    </thead>
    <tbody>
    {stocks}
    </tbody>
</table>
    </div>
  )
};

export default Stocks