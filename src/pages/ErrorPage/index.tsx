import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../utils/constants/routes";
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      <div>
        <h2>Uh Oh! 😥</h2>
        <p>Looks like this page doesn't exist</p>
        {<Link to={routes.HOME}>Back to home?</Link>}
      </div>
    </div>
  );
};

export default ErrorPage;
