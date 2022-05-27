import './right-panel.css';
import Chart from './chart/chart';
import { useState } from 'react';

function RightPanel(props) {
    let [selectedLot, setSelectedLot] = useState(1000);
    function selectedChanged(event){
       setSelectedLot(event.target.value);
    }
    return (
    <div className='right-div'>
          <div className='buy-sell-div'>
            <div>
              <button className='buy-button'>buy</button>
              <button className='sell-button'>sell</button>
            </div>
            <select onChange={selectedChanged}>
              {Array(10).fill(0).map((x,i)=> (1000 * (i+1))).map(lotSize => <option value={lotSize}>{lotSize} {props.baseCurrency}</option>)}
            </select>
            
          </div>
          
          <Chart
            baseCurrency={props.baseCurrency} symbolCurrency={props.symbolCurrency}/>

          <div className='border'>
              logger
          </div>
        </div>

  );
}

export default RightPanel;
