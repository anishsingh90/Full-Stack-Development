function Users(props) {
  return (
    <div className="Users">
      <span>User {props.data.name}</span>
      <span>User {props.data.email}</span>
      <span>User {props.data.contact}</span>
    </div>
  );
}

export default Users;
