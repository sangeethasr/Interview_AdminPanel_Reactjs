import React from "react";
import Logo from "../images/dashboardLogo.png";
import Design from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={Design.Sidebar}>
      <div className={Design.logoContainer}>
        <img className={Design.logo} src={Logo} alt="Logo" />
      </div>
      <ul className={Design.sidebarList}>
        <li className={Design.listHeading}>Create</li>
        <li>
          <div className={Design.sidebarContent}>CRM Management</div>
        </li>
        <li>
          <div className={Design.sidebarContent}>Sales Order Management</div>
        </li>
        <li>
          <div className={Design.sidebarContent}>Finanace Management</div>
        </li>
        <li>
          <div className={Design.sidebarContent}>HR Management</div>
        </li>
        <li>
          <div className={Design.sidebarContent}>Procurement</div>
        </li>
        <li>
          <div className={Design.sidebarContent}>Asset Management</div>
        </li>
        <li>
          <div className={Design.sidebarContent}>Inventory Management</div>
        </li>
        <li>
          <div className={Design.sidebarContent}>Project Management</div>
        </li>
        <li>
          <div className={Design.sidebarContent}>Helpdesk Management</div>
        </li>
        <li>
          <div className={Design.sidebarContent}>Business Intelligencee</div>
        </li>
        <li>
          <div className={Design.sidebarContent}>Control Panel</div>
        </li>
        <li>
          <div className={Design.sidebarContent}>Application Settings</div>
        </li>
        <li>
          <div className={Design.sidebarContent}>Solution Builder</div>
        </li>
        <li>
          <div className={Design.sidebarContent}>Product & Services</div>
        </li>
        <li>
          <div className={Design.sidebarContent}>Suppliers & Customers</div>
        </li>
        <li>
          <div className={Design.sidebarContent}>Organization</div>
        </li>
        <li>
          <div className={Design.sidebarMoreBtn}>More items</div>
        </li>
        <li>
          <div className={Design.sidebarContentLogo}>
            <img className={Design.logo} src={Logo} alt="Logo" />
          </div>
        </li>
      </ul>
    </div>
  );
}
