function user(props) {
  return (
    <div>
      {/* //<h1>hi nk from user</h1> */}
      <h2> Hello: {props.name}</h2>
      <h2>Email: {props.email}</h2>
      <h2>others: {props.others.contact}</h2>
    </div>
  );
}

export default user;
