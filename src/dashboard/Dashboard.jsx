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
          <EmptyDashboardCards title={"Upcoming Tasks"}/>
        </div>
        <div className={Design.dashboardData}>
          <EmptyDashboardCards title={"Upcoming Events"}/>
          <EmptyDashboardCards title={"Net Income()"}/>
        </div>
      </div>
    </div>
  );
}
