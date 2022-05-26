import './left-panel.css';
import React, { useState, useEffect } from 'react';
import HTTPService from '../../services/httpService';

function LeftPanel() {

    let [symbols, setSymbols] = useState([]);
    let [searchText, setSearchText] = useState('');
    let httpService = new HTTPService();

    let getSymbols = () => {
        return symbols
        .filter(symb => searchText === '' || symb.name.toLowerCase().includes(searchText.toLowerCase()));
    }

    let openChartFor = (symbol) => {
        alert(symbol.name);
    }

    useEffect(()=>{
        // debug
        symbols = {"rates":{"AED":3.920668,"AFN":94.928669,"ALL":120.443639,"AMD":486.82203,"ANG":1.924016,"AOA":447.798584,"ARS":127.069688,"AUD":1.506654,"AWG":1.921774,"AZN":1.815569,"BAM":1.958463,"BBD":2.135323,"BDT":93.875131,"BGN":1.955379,"BHD":0.402985,"BIF":2177.346529,"BMD":1.067683,"BND":1.469804,"BOB":7.339037,"BRL":5.149268,"BSD":1.067954,"BTC":0.000036,"BTN":82.715478,"BWP":12.82932,"BYN":3.603768,"BZD":2.152225,"CAD":1.368522,"CDF":2137.836656,"CHF":1.027495,"CLF":0.03253,"CLP":888.872633,"CNH":7.159371,"CNY":7.142501,"COP":4237.281036,"CRC":718.443169,"CUC":1.067705,"CUP":27.482307,"CVE":110.778353,"CZK":24.676905,"DJF":190.008405,"DKK":7.43492,"DOP":58.879965,"DZD":155.569531,"EGP":19.856554,"ERN":16.009215,"ETB":54.994295,"EUR":1,"FJD":2.301325,"FKP":0.849072,"GBP":0.849001,"GEL":3.036859,"GGP":0.849157,"GHS":8.288302,"GIP":0.849013,"GMD":57.630116,"GNF":9403.242351,"GTQ":8.189499,"GYD":223.34308,"HKD":8.378324,"HNL":26.086278,"HRK":7.531858,"HTG":120.611311,"HUF":392.396962,"IDR":15616.400898,"ILS":3.569659,"IMP":0.84868,"INR":82.665866,"IQD":1557.928963,"IRR":45196.874325,"ISK":137.992048,"JEP":0.848759,"JMD":164.921152,"JOD":0.757278,"JPY":135.81096,"KES":124.501053,"KGS":84.843961,"KHR":4334.314957,"KMF":493.11027,"KPW":960.500955,"KRW":1352.172776,"KWD":0.327539,"KYD":0.889528,"KZT":443.219662,"LAK":14178.340503,"LBP":1624.238731,"LKR":384.248941,"LRD":161.684623,"LSL":16.74366,"LYD":5.088647,"MAD":10.602344,"MDL":20.379166,"MGA":4291.158762,"MKD":61.66123,"MMK":1976.215312,"MNT":3315.802275,"MOP":8.631177,"MRU":38.938097,"MUR":46.147726,"MVR":16.483473,"MWK":871.524201,"MXN":21.165158,"MYR":4.691065,"MZN":68.143384,"NAD":16.79814,"NGN":443.005435,"NIO":38.228243,"NOK":10.221511,"NPR":132.344987,"NZD":1.648691,"OMR":0.411587,"PAB":1.06792,"PEN":3.950353,"PGK":3.773604,"PHP":55.923542,"PKR":216.006992,"PLN":4.600725,"PYG":7323.06113,"QAR":3.88648,"RON":4.938083,"RSD":117.398052,"RUB":64.40837,"RWF":1090.717621,"SAR":4.003201,"SBD":8.669919,"SCR":14.516894,"SDG":485.052706,"SEK":10.525589,"SGD":1.468335,"SHP":0.849312,"SLL":13796.733178,"SOS":619.347395,"SRD":22.428762,"SSP":139.017652,"STD":24514.315847,"STN":24.813257,"SVC":9.339464,"SYP":2681.429369,"SZL":16.727276,"THB":36.597776,"TJS":13.341923,"TMT":3.735305,"TND":3.23588,"TOP":2.467324,"TRY":17.453222,"TTD":7.23963,"TWD":31.438831,"TZS":2483.426915,"UAH":31.512408,"UGX":3927.836302,"USD":1.067799,"UYU":42.712119,"UZS":11811.677336,"VES":5.285422,"VND":24758.674914,"VUV":122.60513,"WST":2.803191,"XAF":655.443091,"XAG":0.049111,"XAU":0.0011,"XCD":2.884071,"XDR":0.774753,"XOF":655.443456,"XPD":0.001467,"XPF":119.238604,"XPT":0.001317,"YER":267.073048,"ZAR":16.785008,"ZMW":18.332472,"ZWL":343.646102}}
        //setInterval(()=>{
            // httpService.getLatestSymbols((symbols)=>{
                setSymbols(
                    Object.keys(symbols.rates).map(key => ({name:key, 
                        sell: symbols.rates[key].toFixed(2), 
                        buy: symbols.rates[key].toFixed(2)}))
                );
            // });
        //}, 10000);
        
    }, []);
    

    return (
        <div className='left-div'>

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
