import React from "react";
import { Table } from "antd";
import Design from "./RequestForPurchaseCard.module.css";

const columns = [
  {
    title: "Request ID",
    dataIndex: "requestId",
    key: "requestId",
    render: (text) => <p className={Design.DesigntableText}>{text}</p>,
  },
  {
    title: "Requester",
    dataIndex: "requester",
    key: "requester",
    render: (text) => <p className={Design.DesigntableText}>{text}</p>,
  },
  {
    title: "Subject",
    dataIndex: "subject",
    key: "subject",
    render: (text) => <p className={Design.DesigntableText}>{text}</p>,
  },
  {
    title: "Due Date",
    dataIndex: "dueDate",
    key: "dueDate",
    render: (text) => <p className={Design.DesigntableText}>{text}</p>,
  },
];

const data = [
  {
    requestId: "RQ-002-2024",
    requester: "Name of Requested",
    subject: "New York No. 1 Lake Park",
    dueDate: "21 April 2024",
  },
  {
    requestId: "RQ-002-2024",
    requester: "Name of Requested",
    subject: "New York No. 1 Lake Park",
    dueDate: "21 April 2024",
  },
  {
    requestId: "RQ-002-2024",
    requester: "Name of Requested",
    subject: "New York No. 1 Lake Park",
    dueDate: "21 April 2024",
  }
];

export default function RequestForPurchaseTable() {
  return (
    <div>
      <Table className="custom-table" columns={columns} dataSource={data} />
    </div>
  );
}
