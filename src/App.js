import { useState } from 'react';
import {Route, Switch,} from 'react-router'
import './App.css';
import Nav from './components/nav';
import About from './pages/about';
import Main from './pages/main';
import Show from './pages/show';
import Stocks from './pages/stocks';
import Search from './pages/search';


function App() {
  const apiKey = process.env.REACT_APP_APIKEY;
  console.log(apiKey);

  const [symbol, setSymbol] = useState();


  return (
    <div className="App">
      <Nav apiKey={apiKey} setSymbol={setSymbol} symbol={symbol}/>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/stocks" >
          <Stocks api={apiKey}/>
        </Route>
        <Route path="/stocks/:symbol"
        render={(routerProps)=> <Show {...routerProps} api={apiKey}/>}/>
        <Route exact path="/search" >
          <Search api={apiKey}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
