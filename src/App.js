import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { HomePage } from "./pages/HomePage/HomePage";
import { Container } from "./components/Container/Container";


const App = () => {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
