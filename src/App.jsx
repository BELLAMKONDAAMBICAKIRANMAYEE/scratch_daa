import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import TopicDetail from "./pages/TopicDetails";
import QuizPage from "./pages/QuizPage";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topic/:id" element={<TopicDetail />} />
<Route path="/quiz/:id" element={<QuizPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;