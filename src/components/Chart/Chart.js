import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

return (
<div className="chart">
    {props.dataPoints.map(dataPoint => (
        <ChartBar 
            key={dataPoint.id} 
            value={dataPoint.vaalue} 
            maxValue={null} 
            lable={dataPoint.lable}
        />
    ))}
</div>
);
}

export default Chart;