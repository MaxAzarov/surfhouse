import { gql } from "@apollo/client";

export const ShopSortingQuery = gql`
  query ShopSortingQuery(
    $category: String!
    $limit: Int!
    $price: Int!
    $search: String
    $skip: Int!
  ) {
    ShopSorting(
      category: $category
      limit: $limit
      price: $price
      search: $search
      skip: $skip
    ) {
      count
      cards {
        title
        newPrice
        oldPrice
        overview
      }
    }
  }
`;
