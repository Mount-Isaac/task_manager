import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Basics from "./components/MUI/Basics"
import Notes from "./components/MUI/Notes"
import Create from "./components/MUI/Create"

export default function App () {
  return(
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Home/>}/>
      <Route path="/material-ui" element={<Basics/>}/>
      <Route path="/notes" element={<Notes/>}/>
      <Route path="/create" element={<Create/>}/>
    </Routes>
    </>
  )
}