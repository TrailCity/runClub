import gql from "graphql-tag";

export default gql`
  query GetRunQuery {
    getRun($id: ID!) {
      id
      initiator
      time
      place
      title
    }
  }
`;
