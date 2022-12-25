import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { HomePage } from "./pages/HomePage/HomePage";
import Profile from './pages/Profile/Profile';
import { PersonalPage } from './pages/PersonalPage/PersonalPage';
import { Genre } from './pages/Genre/Genre';
import { Artists } from './pages/Artists/Artists';
import { Albums } from './pages/Albums/Albums';

import { Container } from "./components/Container/Container";
import TestAuthContextProvider from "./testFiles/testContexts/TestAuthContextProvider";
import TestRegisterPage from "./testFiles/testPages/TestRegisterPage";
import TestLoginPage from "./testFiles/testPages/TestLoginPage";
import MusicContextProvider from "./testFiles/testContexts/MusicContextProvider";
import TestAddSongPage from "./testFiles/testPages/TestAddSongPage";
import TestList from "./testFiles/testPages/TestList";
import TestSongDetails from "./testFiles/testPages/TestSongDetails";

const App = () => {
  return (
    <div className="App">
      <TestAuthContextProvider>
        <MusicContextProvider>
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/test-register" element={<TestRegisterPage />} />
              <Route path="/test-login" element={<TestLoginPage />} />
              <Route path="/test-add-song" element={<TestAddSongPage />} />
              <Route path="/test-song-list" element={<TestList />} />
              <Route path="/songs/:slug" element={<TestSongDetails />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/genres" element={<Genre />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/personal-page" element={<PersonalPage />} />
            </Routes>
          </Container>
        </MusicContextProvider>
      </TestAuthContextProvider>
    </div >
  );
};

export default App;
