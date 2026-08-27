import TravelMap from "../components/TravelMap";

function Travel() {
  return (
    <section className="travel-page">
      <h1>Travel & Study Abroad</h1>

      <div className="study-abroad-card">
        <h2>Where I've Been</h2>
        <p>
          I grew up in New Zealand and have been lucky enough to travel from
          a very early age. When I was seven and eight, I lived in Valencia,
          Spain for six months, two years in a row. Then my family did the
          same thing in the United States, based out of Las Vegas.
        </p>
        <p>
          We eventually settled in Nebraska, where I spent my middle school
          and high school years. During that time, I was also able to visit
          a lot of the US states.
        </p>
        <p>
          Now at FSU, I've never given up the opportunity to travel and
          explore the world. My freshman year, straight out of high school,
          I studied abroad at FSU's international campus in Valencia, Spain —
          taking my required classes there along with Spanish. I loved
          living in a new country and learning a new language.
        </p>
        <p>
          I also had the chance to travel around Europe, and even Africa,
          during that time, which only made my love for travel and
          exploration stronger. I've been lucky enough to visit 36 countries
          so far, and I hope to keep exploring the world in the future.
        </p>
      </div>

      <h2>Interactive Map</h2>
      <p>Hover over the map to see where I've visited.</p>
      <TravelMap />
    </section>
  );
}

export default Travel;