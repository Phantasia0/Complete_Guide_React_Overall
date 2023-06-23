import React from "react";
import ChartBar from "./ChartBar";
import { charDataPointType } from "../Expenses/ExpensesChart";
import "./Chart.css";

type ChartProps = {
  dataPoints: charDataPointType[];
};

const Chart: React.FC<ChartProps> = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
