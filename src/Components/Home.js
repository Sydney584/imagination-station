import { useState } from "react";

const Home = () => {
    // const name = "Vickie Valesquez";
    const [name, setName] = useState('Vickie Valesquez');

    const handleCick = () => {
        setName('Sydney');
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <div className="image">
                <img src="https://sydneychase.files.wordpress.com/2012/03/neville.jpg" alt="Neville Created by Vickie Valesquez"
                />
                <p>Image Created by: { name } for The Indigo Room</p>
                <button onClick={handleCick}>Click Me Test</button>
            </div>
        </div>
    );
}
 
export default Home;