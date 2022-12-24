import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { HomePage } from "./pages/HomePage/HomePage";
import Profile from './pages/Profile/Profile';
import { Genre } from './pages/Genre/Genre';
import { Artists } from './pages/Artists/Artists';
import { Albums } from './pages/Albums/Albums';
import Register from "./pages/Register/Register";
import Register2 from "./pages/Register2/Register2";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/genres" element={<Genre />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/reg2" element={<Register2 />} />
      </Routes>
    </div>
  );
};

export default App;
