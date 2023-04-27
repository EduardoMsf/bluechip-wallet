import "../../public/bluechip-logo.png"

export const Navbar = () => {
  return (
    <div id="navbar-custom" className="navbar navbar-dark mb-4 px-4">
      <div className="navbar-tm">
        <img id="logo" src="../../public/bluechip-logo.png"/>
        <span id="navbar-color" className="navbar-brand px-4">
          <strong>Bluechip</strong> Capital
        </span>
      </div>
      <button className="btn  degradado">
        <span>Launch App</span>
      </button>
    </div>
  )
}
