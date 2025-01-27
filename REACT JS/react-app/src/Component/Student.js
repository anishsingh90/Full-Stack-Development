function Student(props) {
  return (
    <>
      <h1>Name = {props.name}</h1>
      <h1>Email = {props.email}</h1>
      <h1>Address = {props.other.address}</h1>
      <h1>Mobile = {props.other.mobile}</h1>
    </>
  );
}

export default Student;
