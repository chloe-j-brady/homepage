import { Link } from "react-router-dom";

function A0() {
  return (
    <section className="assignment-detail">
      <h2>A0 — Personal Homepage</h2>
      <p>
        This assignment is this website — my homepage, built and deployed
        for CIS 4930.
      </p>
      <p>
        <Link to="/">← Back to Home</Link>
      </p>
      <a href="https://github.com/Chloe-J-Brady/homepage" target="_blank" rel="noreferrer">
        View repository →
      </a>
    </section>
  );
}

export default A0;