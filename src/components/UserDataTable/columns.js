export const COLUMNS = [
  {
    Header: "Image",
    accessor: "profile_pic",
    Cell: ({ cell: { value } }) => (
      <img src={value} alt="profile" width="40px" height="40px" />
    )
  },
  {
    Header: "Name",
    Cell: ({ cell }) => {
      let { row } = cell;
      let { original } = row;
      let fullName = original.first_name + " " + original.last_name;
      return <p>{fullName}</p>;
    }
  },
  {
    Header: "Email",
    accessor: "email"
  }
];
