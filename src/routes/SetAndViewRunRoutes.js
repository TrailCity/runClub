import SetRun from "../screens/SetRun";
import ViewRun from "../screens/ViewRun";
import { compose, graphql } from "react-apollo";
import NewRunMutation from "../Queries/NewRunMutation";

const SetRunWithData = compose(
  graphql(NewRunMutation, {
    props: props => ({
      onCreate: run =>
        props.mutate({
          variables: run,
          optimisticResponse: () => ({
            createRun: { ...run, __typename: "Run" }
          })
        })
    })
  })
)(SetRun);

export default {
  SetRun: {
    screen: SetRunWithData
  },
  ViewRun: {
    screen: ViewRun
  }
};
