import { connect } from "react-redux";
import { INCREMENT, DECREMENT } from "../../actions/creators";
import Counter from "../Counter";

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(INCREMENT);
    },
    decrement: () => {
      dispatch(DECREMENT);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
