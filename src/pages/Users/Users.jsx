import { useState, useEffect, useMemo, useCallback } from "react";
import UserDataTable from "../../components/UserDataTable/UserDataTable";
import Button from "../../components/Button/Button.jsx";

import json_data from "../../data/user-data.json";

import "./styles.scss";

const Users = () => {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [index, setIndex] = useState(10);

  const fullData = useMemo(() => json_data, []);

  const updateDisplayData = useCallback(
    idx => {
      let slicedData = fullData.slice(idx - 10, idx);
      setDisplayData([...slicedData]);
    },
    [fullData]
  );

  const handleChange = e => {
    let value = e.target.value.trim();
    console.log(value);
    // let searchResultArray = fullData.filter(element => {
    //   let matchesFirstName = element.first_name.includes(value);
    //   let matchesSecondName = element.last_name.includes(value);
    //   let matchesEmail = element.email.includes(value);
    //   return matchesFirstName || matchesSecondName || matchesEmail;
    // });
    // setData([...searchResultArray]);
    // setIndex(10);
    // let updatedDisplayData = data.splice(0, 10);
    // setDisplayData([...updatedDisplayData]);
  };

  useEffect(() => {
    setData(fullData);
    updateDisplayData(index);
  }, [fullData, index, updateDisplayData]);

  return (
    <div className="user-records-container">
      <div className="table-options">
        <p>User Records</p>
        <div className="right">
          <input onChange={handleChange} />
          <button>Filter</button>
          <Button>+ Add</Button>
        </div>
      </div>

      <div className="table-container">
        <UserDataTable userData={displayData} />
      </div>

      <div className="pagination-controls">
        <button
          className="ctrl-btn prev"
          onClick={() => setIndex(i => i - 10)}
          disabled={index === 10}
        >
          &lt;
        </button>
        <button
          className="ctrl-btn next"
          onClick={() => setIndex(i => i + 10)}
          disabled={index === data.length}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Users;