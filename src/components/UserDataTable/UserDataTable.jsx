import "./styles.scss";
import CircleProfileAvatar from "../CircleProfileAvatar/CircleProfileAvatar";

const UserDataTable = ({ userData }) => {
  return (
    <div>
      {userData.map((val, i) => {
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

export default UserDataTable;
