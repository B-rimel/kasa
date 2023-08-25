function Title(props) {
  return (
    <div className="kasa-title">
      <h1 className="kasa-title">{props.title}</h1>
      <p className="kasa-location">{props.location}</p>
    </div>
  );
}

export default Title;
