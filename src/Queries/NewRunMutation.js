import gql from "graphql-tag";

export default gql`
  mutation NewRunMutation(
    $id: ID!
    $time: String!
    $place: String!
    $title: String
  ) {
    createRun(id: $id, time: $time, place: $place, title: $title) {
      __typename
      id
      time
      place
      title
    }
  }
`;
