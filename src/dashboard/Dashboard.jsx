import React from "react";
import DashboardOverviewCards from "./DashboardOverviewCards";
import RequestForPurchaseCard from "../requestForPurchaseCard/RequestForPurchaseCard";
import EmptyDashboardCards from "../dashboard/EmptyDashboardCards"
import Design from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={Design.dashboard}>
      
      <DashboardOverviewCards />

      <div className={Design.dashboardDataContainer}>
        <div className={Design.dashboardData}>
          <RequestForPurchaseCard />
          <EmptyDashboardCards />
        </div>
        <div className={Design.dashboardData}>
          <EmptyDashboardCards />
          <EmptyDashboardCards />
        </div>
      </div>
    </div>
  );
}
