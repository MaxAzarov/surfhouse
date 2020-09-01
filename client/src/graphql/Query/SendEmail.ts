import { gql } from "@apollo/client";

export const sendEmailQuery = gql`
  query SendEmail($email: String!) {
    SendEmail(email: $email)
  }
`;
