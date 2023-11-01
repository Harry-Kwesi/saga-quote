// sagas.js
import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { setQuote } from "./action";

function* fetchRandomQuote() {
  try {
    const response = yield call(axios.get, "https://type.fit/api/quotes");
    const data = response.data;

    if (data && data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];

      yield put(
        setQuote(randomQuote.text, randomQuote.author || "Unknown Author")
      );
    } else {
      yield put(setQuote("No quotes available", "Unknown Author"));
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation", error);
  }
}

export default function* rootSaga() {
  yield takeLatest("FETCH_QUOTE", fetchRandomQuote);
}
