import "./App.css";
import { Routes, Route } from "react-router-dom";
import ImageForm from "./page/ImageForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ImageForm />} />
    </Routes>
  );
}

export default App;
