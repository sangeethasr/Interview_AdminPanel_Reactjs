import React from "react";
import { Card } from "antd";
import expandIcon from "../images/expandIcon.png";
import RequestForPurchaseTable from "./RequestForPurchaseTable"
import Design from "./RequestForPurchaseCard.module.css";

export default function RequestForPurchaseCard() {
  return (
      <Card className={Design.DashboardDataCard}>
        <div className={Design.header}>
          <h4>Request for Purchase</h4>
          <img src={expandIcon} alt="expandIcon" />
        </div>
        <RequestForPurchaseTable />
      </Card>
  );
}
