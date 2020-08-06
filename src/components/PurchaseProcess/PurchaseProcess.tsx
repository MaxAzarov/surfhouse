import React from "react";
import "./PurchaseProcess.scss";

export default function PurchaseProcess() {
  return (
    <div className="purchase-process">
      <ul>
        <li className="active">Shopping cart</li>
        <li>Checkout</li>
        <li>Order Confirmation</li>
      </ul>
    </div>
  );
}
