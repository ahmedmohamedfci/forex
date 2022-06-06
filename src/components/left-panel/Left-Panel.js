import './left-panel.css';
import React, { useState, useEffect, useRef } from 'react';
import HTTPService from '../../services/HttpService';

function LeftPanel(props) {
    // hooks
    let [symbols, setSymbols] = useState([]);
    let [searchText, setSearchText] = useState('');
    
    useEffect(()=>{
        backendCall()
        .then((result)=>{
            // in the initial run, set the pair to be Eur_USD
            props.setPairPrice(result.filter(x => x.name == 'USD')[0].buy);
        });
        let intervalHandler = setInterval(()=>{
            backendCall();        
        }, 10000);
        
        return ()=>{
            clearInterval(intervalHandler);
        }
    }, []);

    // methods
    let getSymbols = () => {
        return symbols
        .filter(symb => searchText === '' || symb.name.toLowerCase().includes(searchText.toLowerCase()));
    }

    let openChartFor = (symbol) => {
        props.setsymbolCurrency(symbol.name);
        props.setPairPrice(symbol.buy);
    }

    
    let backendCall = ()=>{
        return HTTPService.getLatestSymbols().then((symbols)=>{
            let result = Object.keys(symbols.rates).map(key => ({name:key, 
                sell: symbols.rates[key], 
                buy: symbols.rates[key]}));
            setSymbols(result);
            return result
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
                                <tr key={'tr-'+symb.name} onClick={()=> openChartFor(symb)}>
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
