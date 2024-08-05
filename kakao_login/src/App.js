import { Route, Routes } from "react-router-dom";
import Redirect from "./redirect/Redirect.jsx";
import LoginPage from "./page/LoginPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/oauth" element={<Redirect />} />
    </Routes>
  );
}

export default App;
