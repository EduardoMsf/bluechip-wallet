
import { Link, useLocation } from "react-router-dom";
import "../../public/bluechip-logo.png"

export const Navbar = () => {
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <div id="navbar-custom" className="navbar navbar-dark mb-4 px-4">
      <div className="navbar-tm">
        <Link to="/">
          <img id="logo" src="../../public/bluechip-logo.png" alt="logo bluechip capital"/>
          <span id="navbar-color" className="navbar-brand px-4">
            <strong>Bluechip</strong> Capital
          </span>
        </Link>
      </div>
      { pathname == "/dapp"
        ?
          <button className="btn degradado">
            <span>Connect Wallet</span>
          </button>
        :
          <Link to="/dapp">
            <button className="btn degradado">
              <span>Launch Dapp</span>
            </button>
          </Link>
      }
    </div>
  )
}
