import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { useSelector } from "react-redux";

const GaugeChart = () => {
  const gaugeValue = useSelector((state) => state.gauge.value);

  // Convert percentage to angle for rotation
  const angle = (gaugeValue / 100) * 180;

  // Data for the gauge
  const data = [{ value: gaugeValue }, { value: 100 - gaugeValue }];

  // Colors for the gauge (foreground and background)
  const colors = ["#6a0dad", "#333"];

  return (
    <div className="GaugeContainer" style={{}}>
      <PieChart width={300} height={200} margin={{ top: 170 }}>
        <Pie
          data={data}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
      </PieChart>

      {/* Percentage Labels */}
      <div className="LabelZero">0%</div>
      <div className="LabelTwentyFive">25%</div>
      <div className="LabelFifty ">50%</div>
      <div className="LabelSeventyFive">75%</div>
      <div className="LabelHundred">100%</div>

      {/* Needle */}
      <div
        className="Needle "
        style={{
          transform: `rotate(${angle - 90}deg) translateX(-50%)`, // Adjust alignment
        }}
      />
    </div>
  );
};
export default GaugeChart;
