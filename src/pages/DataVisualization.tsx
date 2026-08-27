import { Link } from "react-router-dom";

function DataVisualization() {
  return (
    <section className="coursework-list">
      <h2>CIS 4930 — Introduction to Data Visualization</h2>
      <p>Assignments completed throughout the semester:</p>
      <ul>
        <li><Link to="/data-visualization/a0">Assignment 0 — Build Your Own Website</Link></li>
      </ul>
    </section>
  );
}

export default DataVisualization;