import { gql } from "@apollo/client";

export const UserRegisterQuery = gql`
  mutation UserRegister(
    $name: String!
    $email: String!
    $company: String!
    $password: String!
  ) {
    userRegister(
      name: $name
      email: $email
      company: $company
      password: $password
    )
  }
`;
