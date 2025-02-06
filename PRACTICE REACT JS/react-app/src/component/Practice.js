function Practice(props) {
  return (
    <div className="Practice">
      <h1>Practice</h1>
      <h1>{props.name}</h1>
      <h1>{props.email}</h1>
      <h1>{props.other.address}</h1>
      <h1>{props.other.mobile}</h1>
    </div>
  );
}

export default Practice;
