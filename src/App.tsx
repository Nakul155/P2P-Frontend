import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Host from "./components/Host";
import Join from "./components/Join";
import CreateRoom from "./components/CreateRoom";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="host" element={<Host />} />
        <Route path="createroom" element={<CreateRoom />} />
        <Route path="join" element={<Join />} />
      </Route>
    </Routes>
  );
}

export default App;
