import profilePhoto from "../assets/profile.jpg";
import Reveal from "../components/Reveal";
import QuoteBox from "../components/QuoteBox";

function Home() {
  return (
    <>
      <Reveal>
        <section className="about-me">
          <img src={profilePhoto} alt="Chloe Brady" className="profile-photo" />

          <div className="about-text">
            <h1>Hey, I'm Chloe 👋</h1>
            <p>
              CS senior at FSU, with minors in Chemistry and Math. Interested in
              BI development, data science, ML, and analytics.
            </p>
          </div>

          <QuoteBox />
        </section>
      </Reveal>

      <Reveal>
        <section className="about-details">
          <p>
            Some of my favorite classes so far have been Intro to Data Science
            and Databases — I like the moment where a pile of raw, disorganized
            data actually starts making sense. On the chemistry side, Organic
            Chemistry has been a surprising highlight; there's something
            satisfying about working through a synthesis problem that isn't
            all that different from debugging code.
          </p>
          <p>
            Outside of school, I'm big into working out. From morning walks with my friends, lifting weights to swimming — it's my go-to way to
            reset after a long day of classes or coding.
          </p>
          <p>
            I grew up in Christchurch, New Zealand before moving to Omaha, Nebraska,
            and I spent my freshman year studying abroad at FSU's Valencia,
            Spain campus. I'm thisgraduating in May 2027.
          </p>
        </section>
      </Reveal>
    </>
  );
}

export default Home;