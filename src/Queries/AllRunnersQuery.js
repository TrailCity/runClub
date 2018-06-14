import gql from "graphql-tag";

export default gql`
  query AllRunners {
    runners {
      id
      name
    }
  }
`;
