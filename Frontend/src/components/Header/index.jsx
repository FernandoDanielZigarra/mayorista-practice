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

  return (
    <div className="fixed bottom-0 w-screen z-30">
      <header className="w-full bg-slate-700 flex items-center justify-between py-5 z-10 rounded-t-2xl">
        {/* <div className="w-[4rem] rounded-full overflow-hidden">
          <img
            className="object-cover"
            src="https://i.pinimg.com/1200x/ec/d9/c2/ecd9c2e8ed0dbbc96ac472a965e4afda.jpg"
            alt=""
          />
        </div> */}
        {/* <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer transition-all duration-500"
          title={open ? "Cerrar menú" : "Abrir menú"}
        >
          <span className="text-2xl text-white absolute z-20 top-[2rem] right-[2.5rem] md:hidden">
            {open ? <ImCross /> : <GiHamburgerMenu />}
          </span>
        </div> */}

        <nav className='w-full '>
          <ul className="flex justify-evenly gap-6">
            <li className="rounded-[50%] flex justify-center items-center ">
              <NavLink to={"/"} className={({isActive})=>{
                return 'flex flex-col justify-center items-center ' + (isActive ? 'text-blue-500' : 'text-white')
              }}>
                <AiOutlineHome className="text-2xl" />
                <span className="text-sm">
                  Inicio
                </span>
              </NavLink>
            </li>
            <li className="rounded-[50%] flex justify-center items-center ">
            <NavLink to={"/products"} className={({isActive})=>{
                return 'flex flex-col justify-center items-center ' + (isActive ? 'text-blue-500' : 'text-white')
              }}>
                <TbPaperBag className="text-2xl" />
                <span className="text-sm">
                  Productos
                </span>
              </NavLink>
            </li>
            <li className="rounded-[50%] flex justify-center items-center ">
              <NavLink to={"/contact"} className={({isActive})=>{
                return 'flex flex-col justify-center items-center ' + (isActive ? 'text-blue-500' : 'text-white')
              }}>
                <IoLogoWhatsapp className="text-2xl" />
                <span className="text-sm">
                  Contacto
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
