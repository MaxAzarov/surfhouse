import { gql } from "@apollo/client";

export const RemoveWishListItem = gql`
  mutation RemoveWishListCard($id: String!) {
    RemoveWishListItem(id: $id) {
      quantity
      size
      id
    }
  }
`;
