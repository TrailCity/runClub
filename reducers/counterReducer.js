const initialCounterState = { count: 0 };

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log("Increment called");
      return { ...state, count: count + 1 };
    case "DECREMENT":
      console.log("Decrement called");
      return { ...state, count: count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
