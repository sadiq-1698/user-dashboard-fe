import { useState, useEffect, useMemo } from "react";

import UserDataTable from "../../components/UserDataTable/UserDataTable";
import Button from "../../components/Button/Button.jsx";
import SearchField from "../../components/SearchField/SearchField";

import json_data from "../../data/user-data.json";
import FilterIcon from "../../static/images/filter.svg";

import { generateButtons } from "./helper";
import "./styles.scss";

const Users = () => {
  const [data, setData] = useState([]);
  const [pageIndex, setPageIndex] = useState(10);
  const [searchUser, setSearchUser] = useState("");
  const [paginationButtons, setPaginationButtons] = useState([]);

  const fullData = useMemo(() => json_data, []);

  const handleChange = e => {
    setPageIndex(10);
    let value = e.target.value.trim();
    setSearchUser(value);
  };

  useEffect(() => {
    setData(fullData);
  }, [fullData]);

  useEffect(() => {
    let buttonArray = generateButtons(data, pageIndex);
    setPaginationButtons([...buttonArray]);
  }, [data, pageIndex]);

  return (
    <div className="user-records-container">
      <div className="table-options">
        <p className="table-header">User Records</p>

        <div className="table-options-right">
          <SearchField
            text="Search in table.."
            color="bgGrey"
            onChange={handleChange}
          />

          <button className="table-options-filter">
            <img src={FilterIcon} alt="filter" width="12px" height="10px" />
            <p>Filter</p>
          </button>

          <Button>+ Add</Button>
        </div>
      </div>

      <div className="table-container">
        <UserDataTable
          userData={fullData}
          pageIndex={pageIndex}
          searchUser={searchUser}
          setData={setData}
        />
      </div>

      <div className="pagination-controls">
        <button
          className="ctrl-btn prev"
          onClick={() => setPageIndex(i => i - 10)}
          disabled={pageIndex <= 10}
        >
          &lt;
        </button>

        {paginationButtons.map(val => {
          return (
            <button
              className={`ctrl-btn ${val * 10 === pageIndex ? "active" : ""}`}
              onClick={() => setPageIndex(val * 10)}
              key={val}
            >
              {val}
            </button>
          );
        })}

        <button
          className="ctrl-btn next"
          onClick={() => setPageIndex(i => i + 10)}
          disabled={pageIndex >= data.length}
        >
          &gt;
        </button>
      </div>
      {data.length}
    </div>
  );
};

export default Users;
