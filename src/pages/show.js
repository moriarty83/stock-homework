import React from "react";
import backupData from "../backupData";
import { Link } from "react-router-dom";
import Circle from "../components/circle";
import CircleImage from "../components/circleImage";


const Show = (props) => {
    const apiKey = props.api;
    const symbol = props.match.params.symbol;
    const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`;

    const [stock, setStock] = React.useState("null");
    const [message, setMessage] = React.useState("")

    const getStock = async () => {
        let data;
        const response = await fetch(url);
        if(response.ok){
            console.log("Fetch Successful")
            data = await response.json();
            setStock(data.map((ele,index)=>{
                return(
                    
                        <div className="flex row space-around wrap" key={index}>
                            <div className="width-10 height-10 margin-03">
                                <CircleImage baseClass="circle bkground-2 border-1 border-box pos-01" content={ele.image} />
                                <Circle baseClass="circle bkground-4 border-1 pos-02" content={ele.companyName} />
                                <Circle baseClass="circle bkground-3 border-1 pos-03" content={`CEO: ${ele.ceo}`} />
                            </div>
                            <div className="width-10 height-10 margin-03">
                                <Circle baseClass="circle bkground-4 border-1 pos-01" content={`Symbol: ${ele.symbol}`} />
                                <Circle baseClass="circle bkground-3 border-1 pos-02" content={`Price: $${ele.price}`} />
                                <Circle baseClass="circle bkground-2 border-1 pos-03" content={`Change $${+(ele.changes).toFixed(3)}`}/>

                            </div>
                            
                            <div className="width-10 height-10 margin-03">
                                <Circle baseClass="circle bkground-2 border-1 pos-01" content={ele.industry} />
                                <Circle baseClass="circle bkground-4 border-1 pos-02" content={`Exchange: ${ele.exchangeShortName}`} />
                                <Circle baseClass="circle bkground-3 border-1 pos-03"
                                    content={<a className="black-text" href={ele.website} target="blank">Website</a>}
                                />

                            </div>

                        </div>
                    
                )
                }))
        }
        else{
            data = [backupData[backupData.findIndex(x => x.ticker === symbol)]];
            console.log("fetch returned error using backup entry: " + data)
            setMessage(<p>Warning: Data is NOT Live</p>)
            setStock(data.map((ele,index)=>{
            return(
                
                    <div key={index}>
                    <div className="circle bkground-1" >{ele.companyName}</div>
                    <p>Symbol: {ele.ticker}</p>
                    <p>Price: {ele.price}</p>
                    <p>Change: {ele.changes}</p>
                    <p>% Change: {ele.changesPercentage}</p>
                    <img src={ele.image} alt="" />
                    </div>
                
            )
            }))
        }

    }; 

    React.useEffect(()=>{
        getStock();
    }, []);
    
  return (
    <>
    {message}
    {stock}
    </>
  );
};

export default Show