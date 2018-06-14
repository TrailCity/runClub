import React from "react";
import { graphql, compose } from "react-apollo";
import SwipeeDoo from "../components/SwipeeDoo";
import AllRunnersQuery from "../Queries/AllRunnersQuery";

const NewBuds = compose(
  graphql(AllRunnersQuery, {
    options: {
      fetchPolicy: "cache-and-network"
    },
    props: props => ({
      runners: props.data.runners
    })
  })
)(SwipeeDoo);

export default NewBuds;
