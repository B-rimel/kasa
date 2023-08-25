function Dropdown(props) {
  return (
    <div>
      <h1>{props.label}</h1>
      <div>{props.content}</div>
    </div>
  );
}

export default Dropdown;
