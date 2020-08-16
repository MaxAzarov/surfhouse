import React from "react";
import "./Navigation.scss";
import { withRouter, RouteComponentProps } from "react-router-dom";
const Navigation = (props: RouteComponentProps) => {
  return (
    <div className="navigation">
      <span onClick={() => props.history.goForward()}>Go to next page » </span>
      <span onClick={() => props.history.goBack()}>
        «‎ Back to previous page
      </span>
    </div>
  );
};
export default withRouter(Navigation);
