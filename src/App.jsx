import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio"; // Assuming Portfolio component is inside 'pages' folder
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />

          {/* You can add other routes here as needed */}
        </Routes>
      </Router>
      {/* <ThemeToggle></ThemeToggle> */}
    </>
  );
}

export default App;
