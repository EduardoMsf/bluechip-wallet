import { Route, Routes } from "react-router-dom"
import { BluechipHome, Navbar } from "../BluechipPage"


export const BluechipRouter = () => {
  return (
    <>
      <Navbar/>
      <Routes>          
          <Route path="/" element={<BluechipHome />} />
      </Routes>
    </>
  )
}
