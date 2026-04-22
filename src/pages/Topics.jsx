import data from "../data/syllabus.json";
import { Link, useNavigate } from "react-router-dom";

function Topics() {
  const navigate = useNavigate();   // ✅ MUST be inside component

  return (
    <div className="container">
      {data.map((t) => (
        <div className="card" key={t.id}>
          <h2>{t.title}</h2>
          <p>{t.definition}</p>

          <Link to={`/topic/${t.id}`}>
            <button>Learn More</button>
          </Link>

          {/* ✅ correct usage */}
          <button onClick={() => navigate(`/quiz/${t.id}`)}>
            Start Quiz
          </button>
        </div>
      ))}
    </div>
  );
}

export default Topics;