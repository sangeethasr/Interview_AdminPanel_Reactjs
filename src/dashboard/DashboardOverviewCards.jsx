import React from "react";
import { Card } from "antd";
import Design from "./DashboardOverviewCards.module.css";
import DashboardOverviewCharts from "./DashboardOverviewCharts";

export default function DashboardOverviewCards() {
  return (
    <div className={Design.DashboardOverviewCards}>
      <Card className={Design.overviewCards}>
        <div className={Design.overviewCardsContent}>
          <div className={Design.employeeTurnoverRate}>
            <h4 className="primaryHeading">Employee Turnover Rate</h4>
            <h2 className="primaryText">25%</h2>
            <h4 className="secondaryText">Resignation in last 90 days: 0</h4>
          </div>
          <div>
            <DashboardOverviewCharts />
          </div>
        </div>
      </Card>

      <Card className={Design.overviewCards}>
        <div className={Design.overviewCardsContent}>
          <div className={Design.totalEmployeesRate}>
            <h4 className="primaryHeading">Total Employees</h4>
            <h2 className="primaryText">123</h2>
            <h4 className={Design.cardTextRow}><span className="secondaryText">Men: 101</span><div style={{height: "16px"}} class={Design.verticalLine}></div><span className="secondaryText">Female: 22</span></h4>
          </div>
          <div class={Design.verticalLine}></div>
          <div className={Design.employeesNumber}>
          <h4 className={Design.cardText}>Full time employees: 100</h4>
          <h4 className={Design.cardText}>Contract employees: 69</h4>
          </div>
        </div>
      </Card>

      <Card className={Design.overviewCards}>
        <div className={Design.overviewCardsContent}>
          <div className={Design.employeeTurnoverRate}>
            <h4 className="primaryHeading">Overall Attendance</h4>
            <h2 className="primaryText">89%</h2>
            <h4 className="secondaryText">Attendance Performance</h4>
          </div>
          <div>
            <DashboardOverviewCharts />
          </div>
        </div>
      </Card>
    </div>
  );
}
