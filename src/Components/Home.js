import { useState, useEffect } from "react";
import QuotesList from './QuotesList';

const Home = () => {
  // testing useState under photo on home page
    // const name = "Vickie Valesquez";
    // const [name, setName] = useState('Vickie Valesquez');
    

    const [quotes, setQuotes] = useState([
      {
        "id": 1,
        "title": "If You Will Assume",
        "author": "Neville Goddard",
        "body": "If you will assume your desire and live there as though it were true, no power on earth can stop it from becoming a fact.",
        "image": "https://sydneychase.files.wordpress.com/2021/06/if-you-will-assume-your-desire-and-live-there-as-though-it-were-true-no-power-on-earth-can-stop-it-from-becoming-a-fact..png",
        "likes": 5
      },
        {
          "id": 2,
          "title": "Whatever You Affix",
          "author": "Neville Goddard",
          "body": "Whatever you affix to the I AM and believe, you become. The I AM in you is God, there is no other.",
          "image": "https://sydneychase.files.wordpress.com/2015/04/538172_10151403454408397_1921145755_n.jpg",
          "likes": 8
          
        },
  
        {
          "id": 3,
          "title": "Imagining Is",
          "author": "Neville Goddard",
          "body": "Imagining is God in action. It isn't rational. Imagination is not a vague essence, it is a being, a majestic being.",
          "image": "https://sydneychase.files.wordpress.com/2021/06/imagining-is-god-in-action.-it-isnt-rational.-imagination-is-not-a-vague-essence-it-is-a-being-a-majestic-being..png",
          "likes": 4
          
        },
        
      {
        "id": 8,
        "title": "Imagination..",
        "author": "Napolean Hill",
        "body": "Imagination Rules the World.",
        "image": "https://sydneychase.files.wordpress.com/2016/02/173116-imagination-rules-the-world.jpg",
        "likes": 12
        
      },
    ]);


    const handleDelete = (id) => {
      const newQuotes = quotes.filter(quote => quote.id !== id);
        setQuotes(newQuotes);
    }
    
    return (
        <div className="home">
            <QuotesList quotes={ quotes} title="All Quotes" handleDelete={handleDelete} />
            <QuotesList quotes={ quotes.filter((quote) => quote.author ==='Neville Goddard')} title="Neville Quotes" />

            {/* testing Image on home page. and clickMe button */}
            

            {/* <h2>Homepage</h2> */}
            {/* <div className="image">
                <img src="https://sydneychase.files.wordpress.com/2012/03/neville.jpg" alt="Neville Created by Vickie Valesquez"
                />
                <p>Image Created by: { name } for The Indigo Room</p>
                <button onClick={handleCick}>Click Me Test</button>
            </div> */}
        </div>
    );
}
 
export default Home;