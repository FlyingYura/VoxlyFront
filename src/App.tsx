import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import CourseDetails from './pages/CourseDetails/CourseDetails';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Payment from './pages/Payment/Payment';
import Schedule from './pages/Schedule/Schedule';
import Tests from './pages/Tests/Tests';
import CourseView from './pages/CourseView/CourseView';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:courseId" element={<CourseDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/payment/:courseId" element={<Payment />} />
              <Route path="/my-courses" element={<Navigate to="/profile" replace />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
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
    </ThemeProvider>
  );
}

export default App;
