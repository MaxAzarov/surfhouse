import { gql } from "@apollo/client";

export const removeBasketCard = gql`
  mutation RemoveBasketItem($id: String!) {
    RemoveBasketItem(id: $id) {
      id
    }
  }
`;
