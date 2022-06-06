import './logs.css';
import { useEffect, useRef } from 'react';
import LocalStorageService from '../../../services/LocalStorageService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faXmark } from '@fortawesome/free-solid-svg-icons'

function Logger(props) {

    function removeThisTrade(trade, localStorage){
        localStorage.removeTrade(trade);
        props.setTrades(localStorage.getTrades());
    }
    
    let localStorageService = useRef();

    useEffect(()=>{
        localStorageService.current = new LocalStorageService();
    },[])

    return (
        <div>
              <table className='logger-table'>
                    <thead>
                        <tr>
                            <th key='date'>Date</th>
                            <th key='pair'>pair</th>
                            <th key='quantity'>quantity</th>
                            <th key='direciton'>direction</th>
                            <th key='price'>entryPrice</th>
                            <th key='action'>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.trades.map(trade => {
                            return (
                                <tr key={'tr-'+trade.id}>
                                    <td key={trade.id}>{trade.date}</td>
                                    <td key={trade.id + '-symbol'}>
                                        {trade.base}-{trade.symbol}
                                    </td>
                                    <td key={trade.id + '-quantity'}>{trade.quantity}</td>
                                    
                                    <td key={trade.id + '-direction'}>{trade.direction}</td>
                                    <td key={trade.id + '-price'}>{trade.entryPrice}</td>
                                    <td key={trade.id + '-action'}>
                                        <div className='close-deal' title='Close Position' key={trade.id + '-action-div'}>
                                            <FontAwesomeIcon onClick={()=>removeThisTrade(trade,localStorageService.current)} icon={faXmark} key={trade.id + '-action-fa'}/>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                  </table>
          </div>
    )
}

export default Logger