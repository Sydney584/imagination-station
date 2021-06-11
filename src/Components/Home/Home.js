import { useState } from "react";

const Home = () => {

    const [quotes, setQuotes] = useState([
      {id: 1,
      author: "Neville Goddard",
      body: "If you will assume your desire and live there as though it were true, no power on earth can stop it from becoming a fact.",
      image: "https://quotefancy.com/quote/1715895/Neville-Goddard-If-you-will-assume-your-desire-and-live-there-as-though-it-were-true-no",
      likes: 5}
    ]);
    return (
        <div className="home">
            <p>Home!!</p>
        </div>
    );
}
 
export default Home;