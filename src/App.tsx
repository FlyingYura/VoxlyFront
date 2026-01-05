import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Payment from './pages/Payment/Payment';
import Schedule from './pages/Schedule/Schedule';
import Tests from './pages/Tests/Tests';
import MyCourses from './pages/MyCourses/MyCourses';
import CourseView from './pages/CourseView/CourseView';
import Profile from './pages/Profile/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/payment/:courseId" element={<Payment />} />
            <Route path="/my-courses" element={<MyCourses />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/course/:courseId" element={<CourseView />} />
            <Route path="/course/:courseId/topic/:topicId" element={<CourseView />} />
            <Route path="/course/:courseId/topic/:topicId/subtopic/:subtopicId" element={<CourseView />} />
            <Route path="/course/:courseId/test/:testId" element={<Tests />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
