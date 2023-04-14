import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState([]);

  //api key details
  useEffect(() => {
    let data = async () => {
      let res = await fetch("http://api.quotable.io/random")
        .then((response) => response.json())
        .catch((err) => console.error(err));
      var data = res.content;
      var author = res.author;
      // update the response(Where quote is fecthed)
      setQuote(res);
      console.log(res);
    };
    data();
  }, []);

  let changeQuote = async () => {
    let res = await fetch("http://api.quotable.io/random")
      .then((response) => response.json())
      .catch((err) => console.error(err));
    // update the response(Where quote is fecthed)
    setQuote(res);
    // console.log(res);
  };

  return (
    <div className='main'>
      <section className='container'>
        <h1>Quote of the Day</h1>
        <p>{quote.content}</p>
        <p className='author'>{quote.author}</p>
        <button onClick={changeQuote}>Generate Quote</button>
      </section>
    </div>
  );
}

export default App;
