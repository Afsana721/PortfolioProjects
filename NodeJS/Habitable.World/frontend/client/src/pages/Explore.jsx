
import { useContext } from "react";
import { TopicsContext } from "../context/TopicsContext";


//Create a explore page function component.
function Explore() {

  const { topicArray, selectedTopic, handleSelectClick } = useContext(TopicsContext);

  return (
    <main>
      <section id="topics">
        <ul className="topic-list">
          {/* mapping topics objects */}
          {topicArray.map((topic, index) => (
            <li key={index} className="topic-previw">
              <img src={topic.image} alt={topic.title} />
              <h3>{topic.title}</h3>
              {/*set handler funciton add a callback, so it will call 
                handler when button is clicked */}
              <button onClick={() => handleSelectClick(topic)}>Learn More</button>
            </li>
          ))}
        </ul>
        {/* article to view individual object */}
        {selectedTopic && (
          <article className="topic-detail">
            <h2>{selectedTopic.title}</h2>
            <img src={selectedTopic.image} alt={selectedTopic.title} />
            <p>{selectedTopic.description}</p>
            <p>{selectedTopic.link}</p>
            <p>{selectedTopic.Nasa}</p>
            <p>{selectedTopic.GBIF}</p>
            <a href={selectedTopic.link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </article>
        )}
      </section>

      <section className="liveData">
        {/* Render API result cards here after topic click */}
      </section>
    </main>
  );
};

export default Explore;