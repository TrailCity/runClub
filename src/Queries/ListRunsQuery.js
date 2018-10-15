import gql from "graphql-tag";

export default gql`
  query ListRunsQuery {
    listRuns {
      items {
        id
        initiator
        time
        place
        title
      }
    }
  }
`;
