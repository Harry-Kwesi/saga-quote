import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "./action";

function RandomQuote() {
  const dispatch = useDispatch();
  const { quote, author } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  const tweetQuote = () => {
    const tweetText = encodeURIComponent(`"${quote}" - ${author}`);
    const twitterURL = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.location.href = twitterURL;
  };

  return (
    <div>
      <div className="title">
        <h1>Quote Machine</h1>
      </div>
      <button onClick={() => dispatch(fetchQuote())}>Get Random Quote</button>
      <button onClick={tweetQuote}>Tweet this Quote</button>
      <div className="quotes">
        <div className="quoteText">
          <p>{quote}</p>
        </div>
        <div className="quoteAuthor">
          <p>{author}</p>
        </div>
      </div>
    </div>
  );
}

export default RandomQuote;
