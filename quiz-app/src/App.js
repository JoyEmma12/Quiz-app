import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingPage from "./Landingpage/LandingPage";
import SignupPage from "./Loginpage/SignupPage";
import LoginPage from "./Loginpage/LoginPage";
import Contactus from "./Landingpage/Contactus";
import CoursePage from "./Courses/CoursePage";

function App() {
  return (
    <div className="App">
      <Router>
        <PageLayout />
      </Router>
    </div>
  );
}

function PageLayout() {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <>
      {(currentPage !== "/signup" && <Navbar />) &&
        (currentPage !== "/login" && <Navbar />)}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/Courses" element={<CoursePage />} />
      </Routes>
      {(currentPage !== "/signup" && <Footer />) &&
        (currentPage !== "/login" && <Footer />)}
    </>
  );
}

export default App;
