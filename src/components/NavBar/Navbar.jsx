import "./navbar.css"
import CartWidget from "./cartWidget"

const Navbar = () => {
  return (
	<nav className="containerNav">
    <div className="brand">
      <img src="https://cdn-icons-png.flaticon.com/512/7475/7475371.png" alt="GV" />
      <h1>Tienda Valdez</h1>
    </div>
    <ul className="categories">
      <li>Remeras</li>
      <li>Buzos</li>
      <li>Camperas</li>
    </ul>

    <CartWidget />
  </nav>
  )
}
export default Navbar