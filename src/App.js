import { Route, Routes } from "react-router-dom";
import Page from "./main";
import NoPage from "./main/404";
import About from "./main/page/about";
import Home from "./main/page/home";
import Tech from "./main/page/tech";
import GetTechList from "./main/page/techList";

function App() {
  let techList = GetTechList()

  const getTechItem = (tech, a) => { 
    let role = () => { 
      if (a === 1) { return "Frontend" }
      else { return "Backend" }
    }
    return techList.find(x => x.type === role()).list.find(x => x.name === tech)
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
          <Route path="/frontend" element={<Home collapse={"frontend"} />} />
          <Route path="/backend" element={<Home collapse={"backend"} />} />
          <Route path="/about" element={<About />} />
          <Route path={"/html"} element={<Tech item={getTechItem("HTML",1)} />} />
          <Route path={"/css"} element={<Tech item={getTechItem("CSS",1)} />} />
          <Route path={"/javascript"} element={<Tech item={getTechItem("JavaScript",1)} />} />
          <Route path={"/react"} element={<Tech item={getTechItem("React",1)} />} />
          <Route path={"/vue"} element={<Tech item={getTechItem("Vue",1)} />} />
          <Route path={"/sass"} element={<Tech item={getTechItem("SASS",1)} />} />
          <Route path={"/bootstrap"} element={<Tech item={getTechItem("Bootstrap",1)} />} />
          <Route path={"/nodejs"} element={<Tech item={getTechItem("NodeJs",2)} />} />
          <Route path={"/express"} element={<Tech item={getTechItem("Express",2)} />} />
          <Route path={"/mongodb"} element={<Tech item={getTechItem("Mongodb",2)} />} />
          <Route path={"/mysql"} element={<Tech item={getTechItem("MySQL",2)} />} />
          <Route path={"/golang"} element={<Tech item={getTechItem("Golang",2)} />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
