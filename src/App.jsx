import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Topics from "./pages/Topics";
import TopicDetail from "./pages/TopicDetails";
import QuizPage from "./pages/QuizPage";
import SubtopicDetail from "./pages/SubtopicDetails";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <BrowserRouter>
      <div className="app-layout">

        {/* 🔥 Overlay (mobile only) */}
        {isOpen && (
          <div className="overlay" onClick={() => setIsOpen(false)}></div>
        )}

        {/* Sidebar */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Main Area */}
        <div className="main-area">
          <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />

          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/topics" element={<Topics />} />
              <Route path="/topic/:id" element={<TopicDetail />} />
              <Route path="/topic/:topicId/:subId" element={<SubtopicDetail />} />
              <Route path="/quiz/:id" element={<QuizPage />} />
            </Routes>
          </div>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;