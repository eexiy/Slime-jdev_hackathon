import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { HomePage } from "./pages/HomePage/HomePage";
import { Container } from "./components/Container/Container";
import Profile from './pages/Profile/Profile';
import { Genre } from './pages/Genre/Genre'; 


const App = () => {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/genres" element={<Genre />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
