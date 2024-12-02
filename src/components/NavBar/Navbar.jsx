import "./navbar.css";
import CartWidget from "./cartWidget";
import logo from "../../assets/images/Store_Logo.png";

const Navbar = () => {
  return (
    <nav className="containerNav">
      <div className="logo">
        <a href="">
          <img  src={logo} alt="" />
        </a>
        <h1 className="title">Tienda Valdez</h1>
      </div>
      <div className="categories">
        <a href="">Remeras</a>
        <a href="">Buzos</a>
        <a href="">Camperas</a>
      </div>
      <CartWidget />
    </nav>
  );
};
export default Navbar;
