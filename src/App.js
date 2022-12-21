import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { HomePage } from "./pages/HomePage/HomePage";
import { Container } from "./components/Container/Container";
import TestAuthContextProvider from "./testFiles/testContexts/TestAuthContextProvider";
import TestRegisterPage from "./testFiles/testPages/TestRegisterPage";
import TestLoginPage from "./testFiles/testPages/TestLoginPage";

const App = () => {
  return (
    <div className="App">
      <TestAuthContextProvider>
        <Container>
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/test-register" element={<TestRegisterPage />} />
            <Route path="/test-login" element={<TestLoginPage />} />
          </Routes>
        </Container>
      </TestAuthContextProvider>
    </div>
  );
};

export default App;
