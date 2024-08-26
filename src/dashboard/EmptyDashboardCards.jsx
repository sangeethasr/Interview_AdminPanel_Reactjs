import React from 'react'
import { Card } from "antd";
import expandIcon from "../images/expandIcon.png";
import Design from "./EmptyDashboardCards.module.css";

export default function EmptyDashboardCards({title}) {

  return (
    <Card className={Design.DashboardDataCard}>
    <div className={Design.header}>
      <h4 className="primaryHeading">{title}</h4>
      <img src={expandIcon} alt="expandIcon" />
    </div>
  </Card>
  )
}
