import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import Design from "./SearchInput.module.css";

export default function SearchInput() {

  return (
    <Input
          className={Design.searchInput}
          placeholder="Search..."
          suffix={
            <SearchOutlined
              style={{
                color: "rgba(0,0,0,.45)",
              }}
            />
          }
        />
  )
}
