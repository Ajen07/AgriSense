import { BrowserRouter, Route,Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Register from "./pages/authentication/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
