import React from "react";
import "./PurchaseProcess.scss";
import { withRouter, RouteComponentProps } from "react-router-dom";

const PurchaseProcess = (props: RouteComponentProps) => {
  return (
    <div className="purchase-process">
      <ul>
        <li className={props.match.path.toString() === "/cart" ? "active" : ""}>
          Shopping cart
        </li>
        <li
          className={
            props.match.path.toString() === "/checkout" ? "active" : ""
          }
        >
          Checkout
        </li>
        <li>Order Confirmation</li>
      </ul>
    </div>
  );
};
export default withRouter(PurchaseProcess);
