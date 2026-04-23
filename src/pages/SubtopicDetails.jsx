import { useParams } from "react-router-dom";
import data from "../data/syllabus.json";

function SubtopicDetail() {
  const { topicId, subId } = useParams();

  const topic = data.topics.find(t => t.id === Number(topicId));
  const sub = topic?.subtopics?.find(s => s.id === subId);

  if (!sub) return <h2>Subtopic not found</h2>;

  return (
    <div className="container">
      <h1>{sub.title}</h1>
      <p>{sub.definition}</p>
    </div>
  );
}

export default SubtopicDetail;