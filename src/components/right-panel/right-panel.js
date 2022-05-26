import './right-panel.css';
import Chart from './chart/chart';

function RightPanel() {

    return (
    <div className='right-div'>
          <Chart></Chart>
          <div className='border'>
              logger
          </div>
        </div>

  );
}

export default RightPanel;
