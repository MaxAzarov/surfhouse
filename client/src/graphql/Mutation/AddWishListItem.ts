import { gql } from "@apollo/client";

export const addWishListItemQuery = gql`
  mutation AddWishList($id: String!, $quantity: Int!, $size: String!) {
    AddWishListItem(id: $id, quantity: $quantity, size: $size) {
      id
      size
      quantity
      elementId {
        title
        newPrice
      }
    }
  }
`;
