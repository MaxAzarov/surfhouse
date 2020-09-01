import { gql } from "@apollo/client";

export const CheckoutQuery = gql`
  query Checkout(
    $number: Int!
    $exp_month: Int!
    $exp_year: Int!
    $cvc: Int!
    $address_line1: String!
  ) {
    Checkout(
      stripeToken: {
        number: $number
        exp_month: $exp_month
        exp_year: $exp_year
        address_line1: $address_line1
      }
    )
  }
`;
