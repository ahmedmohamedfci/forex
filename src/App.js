import { useState } from 'react';
import './App.css';
import LeftPanel from './components/left-panel/Left-Panel';
import RightPanel from './components/right-panel/right-panel';

function App() {
  let [baseCurrency, setBaseCurrency] = useState('EUR');
  let [symbolCurrency, setsymbolCurrency] = useState('USD');
  
  return (
    <div className="App">
      <LeftPanel baseCurrency={baseCurrency} 
        symbolCurrency = {symbolCurrency} 
        setBaseCurrency= {setBaseCurrency} 
        setsymbolCurrency = {setsymbolCurrency}/>
      <RightPanel baseCurrency={baseCurrency} 
        symbolCurrency = {symbolCurrency} 
        setBaseCurrency= {setBaseCurrency} 
        setsymbolCurrency = {setsymbolCurrency} />
    </div>
  );
}

export default App;
