import { useNavigate } from "react-router-dom";
import data from "../data/syllabus.json";

function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={() => setIsOpen(false)}>
        ✖
      </button>

      <h3>📚 Topics</h3>

      {data.map((t) => (
        <div key={t.id} className="sidebar-item">
          {/* Learn Topic */}
          <p
            onClick={() => {
              navigate(`/topic/${t.id}`);
              setIsOpen(false);
            }}
          >
            {t.title}
          </p>

          {/* Quiz Button */}
          {/* <button
            onClick={() => {
              navigate(`/quiz/${t.id}`);
              setIsOpen(false);
            }}
          >
            Quiz
          </button> */}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;