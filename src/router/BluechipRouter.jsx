import { Route, Routes } from "react-router-dom"
import { BluechipHome, Navbar } from "../BluechipPage"
import { BluechipDapp } from "../BluechipPage/BluechipDapp"


export const BluechipRouter = () => {
  return (
    <>
      <Navbar/>
      <Routes>          
          <Route path="/" element={<BluechipHome />} />
          <Route path="/dapp" element={<BluechipDapp />} />
      </Routes>
    </>
  )
}
