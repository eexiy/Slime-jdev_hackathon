import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { HomePage } from "./pages/HomePage/HomePage";
import { Container } from "./components/Container/Container";
import Register from "./pages/Register/Register";
import Register2 from "./pages/Register2/Register2";

const App = () => {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reg" element={<Register />} />
          <Route path="/reg2" element={<Register2 />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
