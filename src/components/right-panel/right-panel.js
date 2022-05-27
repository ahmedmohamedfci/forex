import './right-panel.css';
import Chart from './chart/chart';

function RightPanel(props) {
    return (
    <div className='right-div'>
          <Chart
            baseCurrency={props.baseCurrency} symbolCurrency={props.symbolCurrency}/>
          <div className='border'>
              logger
          </div>
        </div>

  );
}

export default RightPanel;
