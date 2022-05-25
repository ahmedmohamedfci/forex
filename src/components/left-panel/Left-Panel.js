import './left-panel.css';
import React, { useState } from 'react';

function LeftPanel() {
    const symbols = [
        {name:'Euro', sell : 1, buy:2},
        {name:'CHF', sell : 3, buy:4},
        {name:'AUX', sell : 5, buy:6},
    ];
    let [searchText, setSearchText] = useState('');
    
    let getSymbols = () => {
        return symbols
        .filter(symb => searchText === '' || symb.name.toLowerCase().includes(searchText.toLowerCase()));
    }

    let openChartFor = (symbol) => {
        alert(symbol.name);
    }


  return (
    <div className='left-div'>

        <div className='all-symbols'>
            all symbols
        </div>
        <div className='seperator'/>
        <input placeholder='search' className='search-box' key='searchBox' onChange={(event)=>setSearchText(event.target.value)} />
        <div className='seperator'/>
        <table>
            <thead>
                <tr>
                    <th>Symbol</th>
                    <th>Ask</th>
                    <th>Bid</th>
                </tr>
            </thead>
            <tbody>
                {getSymbols().map(symb => 
                        <tr onClick={()=> openChartFor(symb)}>
                            <td>{symb.name}</td>
                            <td>{symb.buy}</td>
                            <td>{symb.sell}</td>
                        </tr>
                    )}
            </tbody>
        </table>
        
    </div>

  );
}

export default LeftPanel;
