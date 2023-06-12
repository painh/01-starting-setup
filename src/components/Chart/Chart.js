import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = props => {
    // eslint-disable-next-line
    const chartMaxValue = Math.max(...props.dataPoints.map(dataPoint => dataPoint.value))

    return <div className="chart">
        {props.dataPoints.map(dataPoint => (<ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={chartMaxValue}
            label={dataPoint.label}/>))}
    </div>
}

export default Chart;