function Dropdown(props) {
  const innerText = props.amenities;
  return (
    <ul>
      {innerText.map((content) => (
        <li>{content}</li>
      ))}
    </ul>
  );
}

export default Dropdown;
