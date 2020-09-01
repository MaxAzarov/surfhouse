import { gql } from "@apollo/client";

export const ChangeCardQuantity = gql`
  mutation ChangeCardAmount($id: String!, $count: Int!) {
    ChangeCardAmount(id: $id, count: $count) {
      quantity
      size
      id
    }
  }
`;
