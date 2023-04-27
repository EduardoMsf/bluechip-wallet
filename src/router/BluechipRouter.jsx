import { Route, Routes } from "react-router-dom"
import { BluechipHome } from "../BluechipPage"


export const BluechipRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<BluechipHome />} />
    </Routes>
  )
}
