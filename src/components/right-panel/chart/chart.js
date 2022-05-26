
import React, { useState, useEffect } from 'react';
import HTTPService from '../../../services/httpService';
import Plot from 'react-plotly.js';
import './chart.css'

function Chart() {
    let pair = "null";
    let xAxis = [1,2,3];
    let yAxis = [2, 6, 100];
    function getPlot() {
        if(pair){
            return <Plot
            data={[
            {
                x: xAxis,
                y: yAxis,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
            },
            ]}
            layout={ {width: 720, height: 240, title: pair} }/> ;
        }
        else{
            return <></>
        }
    }
    return (
        <div>
            {getPlot()}
        </div>
    );
}

export default Chart;