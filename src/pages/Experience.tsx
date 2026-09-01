import resumePdf from "../assets/Resume.pdf";
import Reveal from "../components/Reveal";

const milestones = [
  {
    date: "Expected May 2027",
    title: "B.S. Computer Science — Florida State University",
    points: [
    "~3.94 GPA · President's List",
      "Minors in Chemistry & Mathematics",
      "Kappa Delta Sorority",
      "Women in Computer Science"
    ],
  },
  {
    date: "Summer 2026",
    title: "Data & Analytics Intern — Farm Credit Services of America",
    points: [
      "Designed and built a CDW Knowledge Agent using Snowflake Cortex (Cortex Search and Analyst) to enable natural language querying across an enterprise data warehouse spanning 50+ source systems.",
      "Built a Python pipeline for repository indexing and change data capture, deployed nightly via Kubernetes, Azure DevOps, and Octopus Deploy.",
      "Delivered measurable impact: ~28 ServiceNow tickets addressed, ~12 resolvable instantly by the agent.",
      "Presented the project's technical approach and results to VP-level stakeholders.",
    ],
  },
  {
    date: "Fall 2023 – Summer 2024",
    title: "Study Abroad — FSU Valencia Campus",
    points: [
      "Maintained a 4.0 GPA while traveling to 25 countries and immersing in diverse cultures",
      "Planned and executed solo, small group, and large group trips",
      "Budgeted, researched, and learned about different cultures",
      "Strengthened skills in independent problem-solving, cross-cultural communication, and digital organization",
    ],
  },
  {
    date: "Jun 2023 – Aug 2023",
    title: "Infrastructure Data Intern — City of Omaha",
    points: [
      "Collaborated with a team of engineering interns to inspect and document 40+ manholes daily, gaining hands-on experience in infrastructure assessment and municipal engineering.",
      "Used the SL-RAT acoustic system to evaluate pipe conditions, detect blockages, and assess wastewater flow.",
      "Recorded and analyzed field data, communicating results to the main office to guide maintenance decisions and infrastructure improvements.",
    ],
  },
  {
    date: "Graduated 2023",
    title: "Papillion-La Vista South High School",
    points: [
        "Graduated with Summa Cum Laude, GPA: 4.34",
        "Varsity Swimming, 4 years: Academic All-American honors while balancing athletics with academics",
        "HOSA Vice President: organized events, managed communications, and led a team of 20+ members",
        "National Honor Society — Treasurer: managed chapter finances, tracked membership dues, and coordinated service projects",
        "National Math & Science Initiative Award",
    ],
  },
];

function Experience() {
  return (
    <section className="experience">
      <h2>Experience</h2>

      <div className="timeline">
        {milestones.map((milestone) => (
          <Reveal key={milestone.title}>
            <div className="timeline-item">
              <div className="timeline-dot" />

              <p className="timeline-date">{milestone.date}</p>

              <div className="timeline-content">
                <h3>{milestone.title}</h3>
                <ul>
                  {milestone.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="experience-card">
          <h3>Relevant Coursework</h3>
          <p className="experience-meta">Florida State University</p>
          <ul>
            <li>Data Mining</li>
            <li>Intro to Data Visualization</li>
            <li>Theory of Computation</li>
            <li>Intro to Data Science</li>
            <li>Database Systems</li>
            <li>Data Structures and Algorithms</li>
            <li>Secure and Parallel Computing</li>
          </ul>
        </div>
      </Reveal>

      <Reveal>
        <div className="experience-card">
          <h3>Languages</h3>
          <p className="experience-meta">Florida State University</p>
          <ul>
            <li>Python</li>
            <li>SQL</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Java</li>
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