import "./styles.scss";

const UserDataTable = ({ userData }) => {
  return (
    <div style={{ overflow: "auto", maxWidth: "100%" }}>
      {userData.map((val, i) => {
        return (
          <div
            className={`user-data-row ${i % 2 === 0 ? "even" : "odd"}`}
            key={val.id}
          >
            <img
              src={val.profile_pic}
              width="40px"
              height="40px"
              alt="profile"
            />
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
