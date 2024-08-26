import React from 'react';
import { Chart } from "react-google-charts";

export default function DashboardOverviewCharts() {

    const data = [
        ["Year", "Rate"],
        ["2014", 1000],
        ["2015", 1170],
        ["2016", 660],
        ["2017", 1030],
      ];
    
      const options = {
        bars: "vertical",
        hAxis: {
          title: "Year",
          textStyle: { fontSize: 8 }, // Smaller font size for the horizontal axis
        },
        vAxis: {
          title: "Amount",
          textStyle: { fontSize: 8 }, // Smaller font size for the vertical axis
        },
        chartArea: { width: '50%', height: '70%' }, // Adjust chart area to give more space for labels
        legend: { position: "none" }, // Remove legend to save space
      };

  return (
    <Chart
    chartType="Bar"
    width="140px"
    height="150px"
    data={data}
    options={options}
  />
  )
}
