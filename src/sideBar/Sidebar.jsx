import React from "react";
import Logo from "../images/dashboardLogo.png";
import manageIcon from "../images/manageIcon.svg";
import dotsIcon from "../images/dotsIcon.png";
import Design from "./Sidebar.module.css";
import ProfileBadge from "../components/ProfileBadge";
import SearchInput from "../components/SearchInput";
import { CloseCircleOutlined } from "@ant-design/icons";

export default function Sidebar() {
  return (
    <div className={Design.Sidebar}>

      <div className={Design.profileSection}>
        <div>
          <ProfileBadge />
        </div>
        <div className={Design.closeSidebarIcon}>
          <CloseCircleOutlined />
        </div>
      </div>

      <div className={Design.actionSection}>
        <SearchInput />
      </div>

      <div className={Design.logoContainer}>
        <img className={Design.logo} src={Logo} alt="Logo" />
      </div>

      <ul className={Design.sidebarList}>
        <li className={Design.listHeading}>Create</li>
        <li>
          <div className={Design.sidebarContent}>
            <img src={manageIcon}></img> CRM Management
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Sales Order Management
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Finanace Management
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            HR Management
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Procurement
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Asset Management
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Inventory Management
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Project Management
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Helpdesk Management
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Business Intelligencee
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Control Panel
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Application Settings
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Solution Builder
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Product & Services
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Suppliers & Customers
          </div>
        </li>
        <li>
          <div className={Design.sidebarContent}>
            <span />
            Organization
          </div>
        </li>
        <li>
          <div className={Design.sidebarMoreBtn}>
            <img src={dotsIcon}></img>More items
          </div>
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
