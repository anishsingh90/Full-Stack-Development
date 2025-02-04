function Practice(props) {
  return (
    <div className="Hello">
      <h1>Hello....</h1>
      <h1>{props.name}</h1>
      <h1>{props.email}</h1>
      <h1>{props.other.address}</h1>
      <h1>{props.other.mobile}</h1>
    </div>
  );
}

export default Practice;
