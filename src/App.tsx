import { Routes, Route } from "react-router";
import { ScreenHobbies } from "./components/pages/ScreenHobbies";
import { ScreenHome } from "./components/pages/ScreenHome";
import { ScreenProjects } from "./components/pages/ScreenProjects";

import { MenuBar } from "./components/pages/menu-bar";
import { AboutECommerce } from "./components/pages/about-ecommerse";
import { ScreenCathouse } from "./components/pages/ScreenCathouse";
import { ScreenExploration } from "./components/pages/ScreenExploration";
import { ScreenContact } from "./components/pages/ScreenContact";
// const Bob = () => <div></div>

export function App() {
  return (
    <div>
      <MenuBar />
      {/* <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose"> */}
        <Routes>
          <Route path="/" element={<ScreenHome/>} />
          <Route path="/hobbies" element={<ScreenHobbies/>} />
          <Route path="/projects" element={<ScreenProjects/>} />
          <Route path="/cathouse" element={<ScreenCathouse/>} />
          <Route path="/explorations" element={<ScreenExploration/>} />
          <Route path="/contact" element={<ScreenContact/>} />
        </Routes>
      {/* </div> */}
    </div>
  )
}

export default App
