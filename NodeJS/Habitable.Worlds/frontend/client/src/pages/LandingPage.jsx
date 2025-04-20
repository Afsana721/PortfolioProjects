import NaturesImage from '../assets/Natures.png';
import '../css/landingPage.css';


function LandingPage() {
  return (
    <>
      <section id='landing'>
        <h1 id='motto'>
          Unlocking the Secrets of Our Shared Home, Where Nature's Wisdom Guides Us.
        </h1>

        <section id="row-layout">
          <section id="left">
            <h1 id="left_head">The Symphony of Life: Sound, Vibrations, and Water in Harmony</h1>
            <article className="left_para">
              <p>
                Life itself is a symphony of vibrations, where the sounds of nature—like birdsong,
                rustling leaves, and the flow of water—are as vital to our health as the air we breathe
                or the food we consume. The calming hum of a river or the gentle song of a breeze can
                touch us on a cellular level, reminding us of our deep connection to the Earth.
                <a href="https://www.robbiegeorgephotography.com/blog/blog_posts/the-evolutionary-symphony-sound-vibrations-water-and-health">
                  more
                </a>
              </p>
            </article>
          </section>

          {/* IMAGE IN THE MIDDLE */}
          <img id='overlap' src={NaturesImage} alt="Illustration of Earth with nature" />

          <section id="right">
            <h1 id="right_head">
              These days our goals and expectations are not so clear cut. Something like this:
            </h1>
            <article className="right_para">
              <ol className='right_list'>
                <li>Get the money to get a good education</li>
                <li>Get a good education (whatever that means)</li>
                <li>Get a good job (one that pays a lot of money, not necessarily one you enjoy)</li>
                <li>Get a better job (one that pays even more money)</li>
                <li>Make sure you keep up your presence on social media (because even your employers will look at this stuff)</li>
                <li>Don’t disappoint your parents who still think the world functions like it did in the 60s</li>
                <li>Get married by a certain age</li>
                <li>Have kids</li>
                <li>Provide for your family if you have kids</li>
                <li>Respond to the millions of bids for your attention every day</li>
                <li>Pay taxes and die (probably full of regrets)</li>
                <li>And a million more things…</li>
                <a href="https://1mohr.medium.com/why-you-feel-overwhelmed-by-modern-life-and-what-to-do-about-it-44896dc33be8">
                  more
                </a>
              </ol>
            </article>
          </section>
        </section>
      </section>
    </>
  );
}



export default LandingPage;