import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/Header/Header";
import MainComponent from "./components/MainComponent/MainComponent";
import GamesList from "./components/GamesList/GamesList";
import GamePage from "./components/GamesList/GamePage/GamePage";

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/games" element={<GamesList />} />
        <Route path="/game/:id" element={<GamePage />} />
      </Routes>
    </Container>
  );
};

export default App;
