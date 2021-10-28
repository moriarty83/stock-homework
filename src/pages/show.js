import React from "react";
import backupData from "../backupData";

const Show = (props) => {
    let stockLive = false;
    const apiKey = props.api;
    const symbol = props.match.params.symbol;
    const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`;

    const [stock, setStock] = React.useState("null");

    const getStock = async () => {
        let data;
        const response = await fetch(url);
        if(response.ok){
            console.log("Fetch Successful")
            stockLive = true;
            data = await response.json();
        }
        else{
            stockLive = false;
            
            data = [backupData[backupData.findIndex(x => x.ticker === symbol)]];
            console.log("fetch returned error using backup entry: " + data)
        }
        setStock(data.map((ele,index)=>{
            return(
                
                    <div key={index}>
                    <p >{ele.companyName}</p>
                    <p>Symbol: {ele.ticker}</p>
                    <p>Price: {ele.price}</p>
                    <p>Change: {ele.changes}</p>
                    <p>% Change: {ele.changesPercentage}</p>
                    <img src={ele.image} alt="" />
                    </div>
                
            )
        }))
    }; 

    React.useEffect(()=>{
        getStock();
    }, []);

    const message = stockLive ? <p>Live Stock Ticker</p> : <p>Warning: Data is NOT Live</p>
  return (
    <>
    {message}
    {stock}
    </>
  );
};

export default Show