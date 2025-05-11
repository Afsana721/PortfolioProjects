import axios from 'axios';
import { useEffect, useState } from 'react';
import research_back from '../assets/background2.png';
import search from '../assets/searchEmoji.jpeg';
import '../css/research.css';

function Research() {
    // Search input state
    const [searchBarInput, setSearchBarInput] = useState('earth');

    // NASA API data state
    const [nasaRequestData, setNasaRequestData] = useState([]);

    // Handle search input change
    const handleSearchBarData = (event) => {
        setSearchBarInput(event.target.value);
    };

    // Fetch NASA API data
    const getNasaDataFromServer = async () => {
        if (!searchBarInput.trim()) {
            setNasaRequestData([]);
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/api/nasa', {
                query: searchBarInput
            });
            setNasaRequestData(response.data.collection.items);
        } catch (error) {
            console.error('Error fetching NASA data:', error);
        }
    };
    return (
        <section id="main">
            <img id="backImg" src={research_back} alt="background" />
            <div className="overlay"></div>

            <section id="heading">
                <h1 id="title_text">Research of Nature</h1>
                <p>
                    <a href="https://naturalsciences.org/exhibits/permanent-exhibits/nature-research-center" target="_blank" rel="noopener noreferrer">
                        source
                    </a>
                </p>
            </section>
            {/* NASA API section */}
            <section className="search-section">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search Nasa Research.."
                        value={searchBarInput}
                        onChange={handleSearchBarData} />
                    <button type="submit" onClick={getNasaDataFromServer}>
                        <img src={search} alt="Searching emoji" />
                    </button>
                </div>

                <section className="research-cards">
                    {nasaRequestData.slice(0, 8).map((item, index) => (
                        <article key={index}>
                            <h2>{item.data[0]?.title}</h2>
                            <img src={item.links?.[0]?.href} alt="nasa-img" />
                            <p>{item.data[0]?.description}</p>
                        </article>
                    ))}
                </section>
            </section>
        </section>
    );
}

export default Research;
