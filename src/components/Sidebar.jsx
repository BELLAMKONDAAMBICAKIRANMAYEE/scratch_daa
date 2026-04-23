import { useNavigate } from "react-router-dom";
import { useState } from "react";
import data from "../data/syllabus.json";

function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const [openTopicId, setOpenTopicId] = useState(null);

  const toggleTopic = (id) => {
    setOpenTopicId(openTopicId === id ? null : id);
  };

  return (
    <div className={`sidebar ${isOpen ? "expanded" : "collapsed"}`}>

      {/* Toggle Button */}
      <button
        className="toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "⬅" : "➡"}
      </button>

      <h3>{isOpen ? "📚 Topics" : "📚"}</h3>

      {data.topics.map((t) => (
        <div key={t.id} className="sidebar-item">

          {/* Topic */}
          <p
            className="topic-title"
            onClick={() => toggleTopic(t.id)}
          >
            {isOpen ? t.title : "•"}
            {isOpen && (openTopicId === t.id ? " ▲" : " ▼")}
          </p>

          {/* Subtopics */}
          {isOpen && openTopicId === t.id && (
            <ul className="subtopic-list">
              {t.subtopics.map((sub) => (
                <li
                  key={sub.id}
                  onClick={() => navigate(`/topic/${t.id}/${sub.id}`)}
                >
                  {sub.title}
                </li>
              ))}
            </ul>
          )}

        </div>
      ))}
    </div>
  );
}

export default Sidebar;