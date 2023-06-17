import { useState } from 'react';
import './App.css'
import data from "./data/data.json";

function App() {

    const [current, setCurrent] = useState(null);

    const handleClick = (id) => {
        setCurrent(id);
    }

    return (
        <>
            <header>
                <h1>📖 <span>Flash Cards</span> ⏰</h1>
            </header>

            <main>
                {
                    data.map(e => <section key={e.id} className={(e.id === current) ? "card" : "card2"} onClick={() => handleClick(e.id)}>
                        <p>{(e.id === current) ? e.answer : e.question}</p>
                        <div className='round'></div>
                    </section>)
                }
            </main>
        </>
    )
}

export default App
