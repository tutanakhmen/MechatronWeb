import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Coding from "./pages/Coding"
import Robotics from "./pages/RObotics"
import Partnership from "./pages/Partnership"
import Event from "./pages/Event"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Coding" element={<Coding />} />
      <Route path="/Robotics" element={<Robotics />} />
      <Route path="/Partnership" element={<Partnership />} />
      <Route path="/Event" element={<Event />} />

    </Routes>
    </>
  )
}

export default App
