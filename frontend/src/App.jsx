import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadResume from "./UploadResume";
import Dashboard from "./DashBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UploadResume />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;