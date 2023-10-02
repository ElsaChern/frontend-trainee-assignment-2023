import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainComponent from "./components/MainComponent/MainComponent";
import GamesList from "./components/GamesList/GamesList";
import GamePage from "./components/GamesList/GamePage/GamePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route exact path="/games" element={<GamesList />} />
        <Route path="/game/:id" element={<GamePage />} />
      </Routes>
    </>
  );
}

export default App;
