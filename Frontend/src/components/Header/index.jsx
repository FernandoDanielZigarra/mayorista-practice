/* import { Link } from "react-router-dom"; */
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { Link } from "react-router-dom";

/* const Bars = () => {
  <div id="bars">
    <div></div>
    <div
      className="bg-blue-500 absolute top-0 z-50"
      style={{ animationDelay: "0.1s" }}
    ></div>
    <div
      className="bg-blue-500 translate-x-full"
      style={{ animationDelay: "0.2s" }}
    ></div>
    <div
      className="bg-blue-500 translate-x-full"
      style={{ animationDelay: "0.3s" }}
    ></div>
    <div
      className="bg-blue-500 translate-x-full"
      style={{ animationDelay: "0.4s" }}
    ></div>
  </div>;
};

function Link({ to, children }) {
  const navigate = useNavigate();
  const handleClick = () => {
    const bars = document.getElementById("bars");
    bars?.classList.add("show");
    setTimeout(() => {
      bars?.classList.remove("show");
      bars?.classList.add("hide");
      navigate(to);
    }, 800);
  };
  return <a onClick={handleClick}>{children}</a>;
}
 */
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="w-screen h-[5rem] bg-slate-700 flex items-center justify-between px-8 py-2 z-10">
        <div className="w-[4rem] rounded-full overflow-hidden">
          <img
            className="object-cover"
            src="https://i.pinimg.com/1200x/ec/d9/c2/ecd9c2e8ed0dbbc96ac472a965e4afda.jpg"
            alt=""
          />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer transition-all duration-500"
          title={open ? "Cerrar menú" : "Abrir menú"}
        >
          <span className="text-2xl text-white absolute z-20 top-[2rem] right-[2.5rem] md:hidden">
            {open ? <ImCross /> : <GiHamburgerMenu />}
          </span>
        </div>

        <nav className="hidden bg-black w-screen top-0 left-0 z-10 bg-opacity-50  md:flex md:bg-transparent">
          <ul className="flex text-white flex-col justify-center items-center h-screen text-2xl gap-5 md:flex-row md:h-[5rem] md:text-lg md:w-screen md:pr-8 md:justify-end">
            <li>
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/products"}>Productos</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
