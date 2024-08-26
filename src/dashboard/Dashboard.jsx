import React from 'react';
import DashboardOverviewCards from "./DashboardOverviewCards";
import Design from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={Design.dashboard}>
        <DashboardOverviewCards />
    </div>
  )
}
