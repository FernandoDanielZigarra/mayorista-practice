/* import { Link } from "react-router-dom"; */
/* import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im"; */
/* import { useState } from "react"; */
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai'
import { TbPaperBag } from 'react-icons/tb'
import { IoLogoWhatsapp } from 'react-icons/io5'

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
  /* const [open, setOpen] = useState(false); */
  const className = ({ isActive }) => {
    return 'flex flex-col justify-center items-center ' + (isActive ? 'text-blue-500 md:flex-row md:gap-1' : 'text-white md:flex-row md:gap-1')
  }

  return (
      <header className="fixed bottom-0 w-full bg-mariner-800 flex items-center justify-between py-5 z-10 rounded-t-2xl border-white border-t-2 md:sticky md:w-full md:h-max md:rounded-none md:border-t-0 md:py-6">
        <nav className='w-full px-10'>
          <ul className="flex justify-evenly gap-6 md:justify-end md:gap-14">
            <li className="rounded-[50%] flex justify-center items-center">
              <NavLink to={"/"} className={className}>
                <AiOutlineHome className="text-2xl" />
                <span className="text-sm md:text-md">
                  Inicio
                </span>
              </NavLink>
            </li>
            <li className="rounded-[50%] flex justify-center items-center">
              <NavLink to={"/products"} className={className}>
                <TbPaperBag className="text-2xl" />
                <span className="text-sm md:text-md">
                  Productos
                </span>
              </NavLink>
            </li>
            <li className="rounded-[50%] flex justify-center items-center">
              <NavLink to={"/contact"} className={className}>
                <IoLogoWhatsapp className="text-2xl" />
                <span className="text-sm md:text-md">
                  Contacto
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;
