const initialState = {
  quote: "",
  author: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUOTE":
      return {
        ...state,
        quote: action.payload.quote,
        author: action.payload.author,
      };
    default:
      return state;
  }
};

export default rootReducer;
