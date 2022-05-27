import './left-panel.css';
import React, { useState, useEffect } from 'react';
import HTTPService from '../../services/httpService';

function LeftPanel(props) {
    let httpService = new HTTPService();
    // hooks
    let [symbols, setSymbols] = useState([]);
    let [searchText, setSearchText] = useState('');

    useEffect(()=>{
        backendCall();
        setInterval(()=>{
            backendCall();        
        }, 10000);
        
    }, []);

    // methods
    let getSymbols = () => {
        return symbols
        .filter(symb => searchText === '' || symb.name.toLowerCase().includes(searchText.toLowerCase()));
    }

    let openChartFor = (symbol) => {
        props.setsymbolCurrency(symbol.name);
    }

    
    let backendCall = ()=>{
        httpService.getLatestSymbols((symbols)=>{
            setSymbols(
                Object.keys(symbols.rates).map(key => ({name:key, 
                    sell: symbols.rates[key], 
                    buy: symbols.rates[key]}))
            );
        });
    }

    // renderer
    return (
        <div className='left-div'>
            <div className='barclays-logo'></div>
            <div className='all-symbols'>
                EUR symbols
            </div>
            <div className='seperator'/>
            <input placeholder='search' className='search-box' key='searchBox' onChange={(event)=>setSearchText(event.target.value)} />
            <div className='seperator'/>
            <div className='table'>
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
            
        </div>

    );
}

export default LeftPanel;
