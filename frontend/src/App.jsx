import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import TabsContainer from "./TabInterface";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/problems-contests" element={<TabsContainer />} />
    </Routes>
  );
};

export default App;
