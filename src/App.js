import {Route, Switch} from 'react-router'
import './App.css';
import Nav from './components/nav';
import About from './pages/about';
import Main from './pages/main';
import Show from './pages/show';
import Stocks from './pages/stocks';


function App() {
  const apiKey = process.env.REACT_APP_APIKEY;
  console.log(apiKey);

  return (
    <div className="App">
      <Nav apiKey={apiKey}/>
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

      </Switch>
    </div>
  );
}

export default App;
