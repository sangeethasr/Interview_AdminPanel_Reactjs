import React from "react";
import DashboardOverviewCards from "./DashboardOverviewCards";
import RequestForPurchaseCard from "../requestForPurchaseCard/RequestForPurchaseCard";
import Design from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={Design.dashboard}>
      <DashboardOverviewCards />

      <div className={Design.dashboardDataContainer}>
        <div className={Design.dashboardData}>
          <RequestForPurchaseCard />
          <RequestForPurchaseCard />
        </div>
        <div className={Design.dashboardData}>
          <RequestForPurchaseCard />
          <RequestForPurchaseCard />
        </div>
      </div>
    </div>
  );
}
