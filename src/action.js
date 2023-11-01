export const setQuote = (quote, author) => ({
  type: "SET_QUOTE",
  payload: { quote, author },
});

export const fetchQuote = () => ({
  type: "FETCH_QUOTE",
});
