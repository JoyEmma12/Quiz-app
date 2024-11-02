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
      {currentPage !== "/signup" && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      {currentPage !== "/signup" && <Footer />}
    </>
  );
}

export default App;
