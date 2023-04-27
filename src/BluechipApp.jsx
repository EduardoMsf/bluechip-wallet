import { BrowserRouter } from "react-router-dom"
import { BluechipRouter } from "./router/BluechipRouter"

export const BluechipApp = () => {

  return (
    <BrowserRouter>
      <BluechipRouter />
    </BrowserRouter>
  )
}
//Stateless y statefull
