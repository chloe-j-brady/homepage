import resumePdf from "../assets/Resume.pdf";
import Reveal from "../components/Reveal";

function Experience() {
  return (
    <section className="experience">
      <h2>Experience</h2>

      <Reveal>
        <div className="experience-card">
          <h3>Data & Analytics Intern — Farm Credit Services of America</h3>
          <p className="experience-meta">Business Intelligence Team · Omaha, NE · Summer 2026</p>
          <ul>
            <li>
              Designed and built a CDW Knowledge Agent using Snowflake Cortex
              (Cortex Search and Analyst) to enable natural language querying
              across an enterprise data warehouse spanning 50+ source systems.
            </li>
            <li>
              Built a Python pipeline for repository indexing and change data
              capture, deployed nightly via Kubernetes, Azure DevOps, and
              Octopus Deploy.
            </li>
            <li>
              Delivered measurable impact: ~28 ServiceNow tickets addressed,
              ~12 resolvable instantly by the agent.
            </li>
            <li>Presented the project's technical approach and results to VP-level stakeholders.</li>
          </ul>
        </div>
      </Reveal>

      <Reveal>
        <div className="experience-card">
          <h3>Florida State University</h3>
          <p className="experience-meta">B.S. Computer Science, Minors in Chemistry & Mathematics · Expected May 2027</p>
          <ul>
            <li>~3.94 GPA</li>
            <li>Member, Women in Computer Science</li>
            <li>Active member, Kappa Delta</li>
          </ul>
        </div>
      </Reveal>

      <Reveal>
        <div>
          <h2>Resume</h2>
          <iframe
            src={resumePdf}
            title="Chloe Brady Resume"
            className="resume-frame"
          />
        </div>
      </Reveal>
    </section>
  );
}

export default Experience;