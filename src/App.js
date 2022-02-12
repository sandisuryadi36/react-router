import { Route, Routes } from "react-router-dom";
import Page from "./main";
import NoPage from "./main/404";
import Home from "./main/page/home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
