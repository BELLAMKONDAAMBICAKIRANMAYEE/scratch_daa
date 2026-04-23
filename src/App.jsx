import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Topics from "./pages/Topics";
import TopicDetail from "./pages/TopicDetails";
import QuizPage from "./pages/QuizPage";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* ✅ Home */}
        <Route path="/" element={<Home />} />

        {/* ✅ Topics List */}
        <Route path="/topics" element={<Topics />} />

        {/* ✅ Single Topic Detail */}
        <Route path="/topic/:id" element={<TopicDetail />} />

        {/* ✅ Quiz Page (IMPORTANT) */}
        <Route path="/quiz/:id" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;