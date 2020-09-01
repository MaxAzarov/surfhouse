import { gql } from "@apollo/client";

export const UserLoginQuery = gql`
  mutation UserLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      token
      id
    }
  }
`;
