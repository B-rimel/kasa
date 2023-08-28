import { Link } from "react-router-dom";
import "./Error.scss";

function Error() {
  return (
    <div className="kasa-error">
      <h1>404</h1>
      <p className="kasa-oups">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="kasa-back">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
