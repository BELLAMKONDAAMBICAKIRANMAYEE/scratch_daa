import { useParams } from "react-router-dom";
import data from "../data/syllabus.json";

function TopicDetail() {
  const { id } = useParams();
  const topic = data.find((t) => t.id == id);

  if (!topic) return <h2>Topic not found</h2>;

  return (
    <div className="container">

      {/* TITLE */}
      <h1>{topic.title}</h1>

      {/* DEFINITION */}
      <section className="card">
        <h2>📘 Definition</h2>
        <p>{topic.definition}</p>
      </section>

      {/* FLOW */}
      <section className="card">
        <h2>🔄 Flow</h2>
        <p>{topic.flow}</p>
      </section>

      {/* RULES */}
      <section className="card">
        <h2>📏 Rules</h2>
        <ul>
          {topic.rules?.map((rule, i) => (
            <li key={i}>{rule}</li>
          ))}
        </ul>
      </section>

      {/* FLOWCHARTS */}
      <section className="card">
        <h2>📊 Flowcharts</h2>
        <ul>
          {topic.flowcharts?.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </section>

      {/* TABLES */}
      {topic.tables?.map((table, index) => (
        <section className="card" key={index}>
          <h2>📋 {table.title}</h2>
          <table border="1" cellPadding="8">
            <thead>
              <tr>
                {table.columns.map((col, i) => (
                  <th key={i}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}

      {/* EXAMPLES */}
      <section className="card">
        <h2>💻 Examples</h2>
        {topic.examples?.map((ex, i) => (
          <pre key={i} style={{ background: "#eee", padding: "10px" }}>
            {ex.code}
          </pre>
        ))}
      </section>

      {/* IMPORTANT NOTES */}
      <section className="card">
        <h2>⚠️ Important Notes</h2>
        <ul>
          {topic.important_notes?.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      </section>

      {/* CONCEPT */}
      <section className="card">
        <h2>🧠 Concept</h2>
        <p>{topic.concept}</p>
      </section>

      {/* SUMMARY */}
      <section className="card">
        <h2>📌 Summary</h2>
        <p>{topic.summary}</p>
      </section>

      {/* REAL-TIME */}
      <section className="card">
        <h2>🌍 Real-Time Examples</h2>
        <ul>
          {topic.real_time_examples?.map((ex, i) => (
            <li key={i}>{ex}</li>
          ))}
        </ul>
      </section>

    </div>
  );
}

export default TopicDetail;