import { useEffect } from "react";
import PropTypes from "prop-types";

import CircleProfileAvatar from "../CircleProfileAvatar/CircleProfileAvatar";
import { searchInArray } from "../../pages/Users/helper";
import "./styles.scss";

const UserDataTable = ({ userData, pageIndex, searchUser, setData }) => {
  useEffect(() => {
    let updatedData = userData.filter(element =>
      searchInArray(element, searchUser)
    );
    setData([...updatedData]);
  }, [searchUser, userData, setData]);

  return (
    <div>
      {userData
        .filter(element => searchInArray(element, searchUser))
        .slice(pageIndex - 10, pageIndex)
        .map((val, i) => {
          return (
            <div
              className={`user-data-row ${i % 2 === 0 ? "even" : "odd"}`}
              key={val.id}
            >
              <CircleProfileAvatar img={val.profile_pic} width="40px" />

              <div className="data-col">
                <p>
                  {val.first_name}&nbsp;{val.last_name}
                </p>
              </div>

              <div className="data-col email">
                <p>{val.email}</p>
              </div>

              <div className="data-col">
                <p>{val.gender ? "Male" : "Female"}</p>
              </div>

              <div className="data-col">
                <p>{val.role ? "Admin" : "User"}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

UserDataTable.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageIndex: PropTypes.number.isRequired,
  searchUser: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired
};

export default UserDataTable;
