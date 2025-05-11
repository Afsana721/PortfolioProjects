
import { useState, useEffect, useContext, useMemo } from "react";
import axios from 'axios';
import { TopicsContext } from "../context/TopicsContext";
import "../css/explore.css";

//Create a explore page function component.
function Explore() {
  const { topicArray } = useContext(TopicsContext);
  //Set NASA and GBIF api data states in side hook object 
  const [nasaData, setNasaData] = useState([]);

  const [gbifData, setGbifData] = useState([]);

  //Nasa api handler function from frontend to server 
  const handleNasaData = async function (topicArray) {
    try {
      // Send GET requests for each topic's NASA data
      const responses = await Promise.all(
        topicArray.map(async (topic) => {
          const response = await axios.get("http://localhost:5000/api/nasa", {
            params: { query: topic.Nasa.title }
          });

          // Return full topic object with updated Nasa image
          return {
            title: topic.title,
            image: topic.image,
            description: topic.description,
            link: topic.link,
            Nasa: {
              ...topic.Nasa,
              image: response.data.image
            }
          };
        })
      );
      // Update state with enriched NASA data
      setNasaData(responses);
    } catch (error) {
      console.log("Error:", error);
    }
  };


  //GBIF api handler function from frontend to server 
  const handleGbifData = async function (topicArray) {
    try {
      // Send GET requests for each topic's NASA data
      const responses = await Promise.all(
        topicArray.map(async (topic) => {
          const response = await axios.get("http://localhost:5000/api/gbif", {
            params: { query: topic.GBIF.title }
          });

          // Return full topic object with updated Nasa image
          return {
            title: topic.title,
            image: topic.image,
            description: topic.description,
            link: topic.link,
            GBIF: {
              ...topic.GBIF,
              image: response.data.image
            }
          };
        })
      );
      // Update state with enriched NASA data
      setGbifData(responses);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  //use useEffect to call Nasa & Gbif function to get data from server 
  useEffect(() => {
    handleNasaData(topicArray);
    handleGbifData(topicArray);
  }, [topicArray]);

  /* Set sleected Topic state when user click then jsx return selected tpoic 
  as jsx return, so fiber tree need data inside that object node.*/
  const [selectedTopic, setSelectedTopic] = useState(null);

  /* Handler function to get li object's id when user click it*/
//  const handleSelectClick = (topic) => {
//     setSelectedTopic(topic);
//   };

//Using memoization to memoize first render page or fiber node then place when user back
  const memoizedTopics = useMemo(() => topicArray, [topicArray]);

  return (
    <main>
      <section id="topics">
        {!selectedTopic && (
          <ul className="topic-list">
            {memoizedTopics.map((topic, index) => {
              const nasa = nasaData.find(item => item.title === topic.title);
              const gbif = gbifData.find(item => item.title === topic.title);

              return (
                <li key={index}>
                  <h3>{topic.title}</h3>
                  <img src={topic.image} alt={topic.title} />
                  <p>{topic.description}</p>
                  <a href={topic.link} target="_blank" rel="noreferrer">Learn more</a>
                  {nasa?.Nasa?.image && <img src={nasa.Nasa.image} alt="NASA" />}
                  {gbif?.GBIF?.image && <img src={gbif.GBIF.image} alt="GBIF" />}
                  <button onClick={() => setSelectedTopic({ ...topic, Nasa: nasa?.Nasa, GBIF: gbif?.GBIF })}>Details</button>
                </li>
              );
            })}
          </ul>
        )}

        {selectedTopic && (
          <article className="topic-detail">
            <h2>{selectedTopic.title}</h2>
            <img src={selectedTopic.image} alt={selectedTopic.title} />
            <p>{selectedTopic.description}</p>
            <a href={selectedTopic.link} target="_blank" rel="noreferrer">Read more</a>
            {selectedTopic.Nasa?.image && selectedTopic.Nasa.image !== "" && (
              <img src={selectedTopic.Nasa.image} alt="Nasa" />
            )}
            {selectedTopic.GBIF?.image && selectedTopic.GBIF.image !== "" && (
              <img src={selectedTopic.GBIF.image} alt="GBIF" />
            )}
            <button onClick={() => setSelectedTopic(null)}>Back</button>
          </article>
        )}
      </section>
    </main>
  );
};

export default Explore;