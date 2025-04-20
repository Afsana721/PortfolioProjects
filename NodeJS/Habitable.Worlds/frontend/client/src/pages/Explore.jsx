

function Explore() {

            return (
              <main id="explore">
                <h1>Explore Nature Topics</h1>
                <section className="explore-grid">
                  {/* Cards or previews that link to details or external resources */}
                  <article className="explore-item">
                    <h2>Forests & Biodiversity</h2>
                    <img src="..." alt="Forest preview" />
                    <p>Learn how forests support life on Earth.</p>
                  </article>
          
                  <article className="explore-item">
                    <h2>Climate Change</h2>
                    <img src="..." alt="Climate preview" />
                    <p>Understand how climate affects nature and us.</p>
                  </article>
          
                  {/* More topics */}
                </section>
              </main>
            );
    
};


export default Explore;