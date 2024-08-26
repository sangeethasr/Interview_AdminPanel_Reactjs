import React from "react";
import DashboardOverviewCards from "./DashboardOverviewCards";
import RequestForPurchaseCard from "../requestForPurchaseCard/RequestForPurchaseCard";
import EmptyDashboardCards from "../dashboard/EmptyDashboardCards";
import Design from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={Design.dashboard}>
      <DashboardOverviewCards />

      <div className={Design.dashboardDataContainer}>

        <div className={Design.dashboardData}>
          <div className={Design.dashboardDataCard}>
            <RequestForPurchaseCard />
          </div>
          <div className={Design.dashboardDataCard}>
            <EmptyDashboardCards title={"Upcoming Tasks"} />
          </div>
        </div>

        <div className={Design.dashboardData}>
          <div className={Design.dashboardDataCard}>
            <EmptyDashboardCards title={"Upcoming Events"} />
          </div>
          <div className={Design.dashboardDataCard}>
            <EmptyDashboardCards title={"Net Income()"} />
          </div>
        </div>
        
      </div>
    </div>
  );
}
