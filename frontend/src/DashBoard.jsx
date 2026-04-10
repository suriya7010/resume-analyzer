import { useLocation } from "react-router-dom";
import "./dashboard.css";

export default function Dashboard() {
  const { state } = useLocation();
  const data = state?.data;

  if (!data) return <h2>No Data Found ❌</h2>;

  return (
    <div className="container">
      <h1>Resume Analysis</h1>

      <div className="card">
        <h2>ATS Score</h2>
        <p className="score">{data.atsScore}%</p>
      </div>

      <div className="grid">
        <div className="card">
          <h3>✅ Found Skills</h3>
          <ul>
            {data.foundSkills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3>❌ Missing Skills</h3>
          <ul>
            {data.missingSkills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <h3>💡 Suggestions</h3>
        <ul>
          {data.suggestions.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}