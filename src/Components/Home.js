import { useState } from "react";

const Home = () => {
    // const name = "Vickie Valesquez";
    // const [name, setName] = useState('Vickie Valesquez');
    const [quotes, setQuotes] = useState([
        {"id": 1,
      "author": "Neville Goddard",
      "body": "If you will assume your desire and live there as though it were true, no power on earth can stop it from becoming a fact.",
      "image": "https://sydneychase.files.wordpress.com/2021/06/if-you-will-assume-your-desire-and-live-there-as-though-it-were-true-no-power-on-earth-can-stop-it-from-becoming-a-fact..png",
      "likes": 5},
      {
        "author": "Neville Goddard",
        "body": "Whatever you affix to the I AM and believe, you become. The I AM in you is God, there is no other.",
        "image": "https://sydneychase.files.wordpress.com/2015/04/538172_10151403454408397_1921145755_n.jpg",
        "likes": 8,
        "id": 2
      },
      {
        "author": "Neville Goddard",
        "body": "Imagining is God in action. It isn't rational. Imagination is not a vague essence, it is a being, a majestic being.",
        "image": "https://sydneychase.files.wordpress.com/2021/06/imagining-is-god-in-action.-it-isnt-rational.-imagination-is-not-a-vague-essence-it-is-a-being-a-majestic-being..png",
        "likes": 4,
        "id": 3
      },


    ]);


    // const handleCick = () => {
    //     setName('Sydney');
    // }
    return (
        <div className="home">
            {quotes.map((quotes) => (
                <div className="quotes-preview" key={ quotes.id }>
                    <h4>{ quotes.body }</h4>
                    <img src={ quotes.image } alt="images from the indigo room" />
                    <p>Written by: { quotes.author }</p>

                </div>
            )
            )}
            <h2>Homepage</h2>
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