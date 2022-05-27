
import React, { useState, useEffect, useRef, useContainerDimensions } from 'react';
import HTTPService from '../../../services/httpService';
import Plot from 'react-plotly.js';
import './chart.css'

function Chart(props) {
  
    // hooks
    const parentDiv = useRef();
    let [xAxis, setXAxis] = useState([]);
    let [yAxis, setYAxis] = useState([]);
    let httpService = new HTTPService();
    useEffect(()=>{
        httpService.getHistory(props.baseCurrency, props.symbolCurrency, (history)=>{
            setXAxis(Object.entries(history.rates).map(x => x[0]));
            setYAxis(Object.entries(history.rates).map(x => x[1][props.symbolCurrency]));
        });
        
    }, [props.symbolCurrency, props.baseCurrency]);

    // functions
    function getPlotWidth(){
        if(!parentDiv.current) return 720;
        return 0.9 * parentDiv.current.clientWidth;
    }

    
    // renderer
    return (
        <div ref={parentDiv} className='parentDiv'>
            <Plot
            data={[
            {
                x: xAxis,
                y: yAxis,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
                yaxis: {tickformat : ".6f"}
            }]}
            layout={ {width: getPlotWidth(), height: 240, title: `${props.baseCurrency}-${props.symbolCurrency}`} }/> 
        </div>
    
    );
}

export default Chart;