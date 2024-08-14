import { Routes, Route } from "react-router-dom";

import { Resume } from "./pages";
import { Nav } from "./modules";
import "./app.css";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
