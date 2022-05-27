import './right-panel.css';
import Chart from './chart/chart';
import Logger from './logs/logs';
import { useEffect, useState } from 'react';
import LocalStorageService from '../../services/localStorageService';
import * as moment from 'moment'

function RightPanel(props) {
    let _moment = moment;
    let [selectedLot, setSelectedLot] = useState(1000);
    let [trades, setTrades] = useState([]);
    let localStorageService = new LocalStorageService();

    // on initial load, get saved trades from local storage
    useEffect(()=>{
      setTrades(localStorageService.getTrades());
    }, []);

    function selectedChanged(event){
       setSelectedLot(event.target.value);
    }

    function makeAtrade(direction){
      let trade = localStorageService.addTrade({
        date: _moment().format('DD-MM hh:mm:ss'),
        symbol: props.symbolCurrency,
        base: props.baseCurrency,
        quantity: selectedLot,
        direction: direction,
        entryPrice: props.pairPrice
      });
      setTrades([...trades, trade]);
    }


    return (
    <div className='right-div'>
          <div className='buy-sell-div'>
            <div>
              <button className='buy-button' onClick={()=>makeAtrade('Buy')}>Buy</button>
              <button className='sell-button' onClick={()=>makeAtrade('Sell')}>Sell</button>
            </div>
            <select onChange={selectedChanged}>
              {Array(10).fill(0).map((x,i)=> (1000 * (i+1))).map(lotSize => 
              <option key={lotSize} value={lotSize}>{lotSize} {props.baseCurrency}</option>
              )}
            </select>
            
          </div>
          
          <Chart
            baseCurrency={props.baseCurrency} symbolCurrency={props.symbolCurrency}/>

          <Logger trades={trades} setTrades={setTrades}/>
        </div>

  );
}

export default RightPanel;
