import { useState, useEffect } from "react";

import UserDataTable from "../../components/UserDataTable/UserDataTable";
import Button from "../../components/Button/Button.jsx";
import SearchField from "../../components/SearchField/SearchField";

import FilterIcon from "../../static/images/filter.svg";

import { generateButtons } from "./helper";
import "./styles.scss";
import useComponentVisible from "../../hooks/useComponentVisible";
import { getAllUsers } from "../../api/user";

const Users = () => {
  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState([]);
  const [pageIndex, setPageIndex] = useState(10);
  const [paginationButtons, setPaginationButtons] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const [filter, setFilter] = useState({ admin: true, user: true });

  useEffect(() => {
    const getUsers = async () => {
      const data = await getAllUsers();
      setFullData(data);
    };
    getUsers();
  }, []);

  const handleUserSearch = e => {
    setPageIndex(10);
    let value = e.target.value.trim().toLowerCase();
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

        <TableOptions
          handleSearch={handleUserSearch}
          setPageIndex={setPageIndex}
          setFilter={setFilter}
          filter={filter}
        />
      </div>

      <div className="table-container">
        {/* {data.length === 0 && <h3 className="no-records">No records found.</h3>}
        {data.length !== 0 && ( */}
        <UserDataTable
          userData={fullData}
          pageIndex={pageIndex}
          searchUser={searchUser}
          roleFilter={filter}
          setData={setData}
        />
        {/* )} */}
      </div>

      <PaginationControls
        data={data}
        index={pageIndex}
        paginationButtons={paginationButtons}
        setIndex={setPageIndex}
      />
    </div>
  );
};

const TableOptions = ({ handleSearch, setPageIndex, setFilter, filter }) => {
  return (
    <div className="table-options-right">
      <SearchField
        text="Search in table.."
        color="bgGrey"
        onChange={handleSearch}
      />

      <UserRoleFilter
        filter={filter}
        setFilter={setFilter}
        setPageIndex={setPageIndex}
      />

      <Button>+ Add</Button>
    </div>
  );
};

const UserRoleFilter = ({ filter, setFilter, setPageIndex }) => {
  const {
    triggerRef,
    childRef,
    isComponentVisible,
    toggleChild
  } = useComponentVisible();

  return (
    <div className="table-options-filter">
      <button
        onClick={toggleChild}
        ref={triggerRef}
        className={`${isComponentVisible ? "active" : ""}`}
      >
        <img src={FilterIcon} alt="filter" width="12px" height="10px" />
        <p>Filter</p>
      </button>

      {isComponentVisible && (
        <div className="filter-container" ref={childRef}>
          <label htmlFor="filter-admin">
            <input
              type="checkbox"
              onChange={e => {
                setPageIndex(10);
                setFilter({ ...filter, admin: e.target.checked });
              }}
              defaultChecked={filter.admin}
              id="filter-admin"
            />
            Admin
          </label>

          <label htmlFor="filter-user">
            <input
              type="checkbox"
              onChange={e => {
                setPageIndex(10);
                setFilter({ ...filter, user: e.target.checked });
              }}
              defaultChecked={filter.user}
              id="filter-user"
            />
            User
          </label>
        </div>
      )}
    </div>
  );
};

const PaginationControls = ({ setIndex, index, paginationButtons, data }) => {
  return (
    <div className="pagination-controls">
      <button
        className="ctrl-btn prev"
        onClick={() => setIndex(i => i - 10)}
        disabled={index <= 10}
      >
        &lt;
      </button>

      {paginationButtons.map(val => {
        return (
          <button
            className={`ctrl-btn ${val * 10 === index ? "active" : ""}`}
            onClick={() => setIndex(val * 10)}
            key={val}
          >
            {val}
          </button>
        );
      })}

      <button
        className="ctrl-btn next"
        onClick={() => setIndex(i => i + 10)}
        disabled={index >= data.length}
      >
        &gt;
      </button>
    </div>
  );
};

export default Users;
