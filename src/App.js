import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { HomePage } from "./pages/HomePage/HomePage";
import { Container } from "./components/Container/Container";
import TestAuthContextProvider from "./testFiles/testContexts/TestAuthContextProvider";
import TestRegisterPage from "./testFiles/testPages/TestRegisterPage";
import TestLoginPage from "./testFiles/testPages/TestLoginPage";
import MusicContextProvider from "./testFiles/testContexts/MusicContextProvider";
import TestAddSongPage from "./testFiles/testPages/TestAddSongPage";
import TestList from "./testFiles/testPages/TestList";
const App = () => {
  return (
    <div className="App">
      <TestAuthContextProvider>
        <MusicContextProvider>
          <Container>
            <Routes>
              <Route path="/*" element={<HomePage />} />
              <Route path="/test-register" element={<TestRegisterPage />} />
              <Route path="/test-login" element={<TestLoginPage />} />
              <Route path="/test-add-song" element={<TestAddSongPage />} />
              <Route path="/test-song-list" element={<TestList />} />
            </Routes>
          </Container>
        </MusicContextProvider>
      </TestAuthContextProvider>
    </div>
  );
};

export default App;
