import {
  TiSocialYoutube,
  TiSocialInstagram,
  TiSocialFacebook,
} from "react-icons/ti";
import {RiWhatsappFill} from "react-icons/ri";


function Footer() {
  return (
    <footer className="w-screen bg-slate-700 flex flex-col h-[13rem] pt-5">
      <div className="flex flex-col gap-1 justify-center items-center">
        <div className="flex items-center justify-center gap-[1rem]">
          <TiSocialInstagram className="text-4xl text-slate-300 border-2 rounded-full p-1 hover:transition ease duration-500 hover:border-sky-800" />
          <TiSocialYoutube className="text-4xl text-slate-300 border-2 rounded-full p-1 hover:transition ease duration-500 hover:border-sky-800" />
          <TiSocialFacebook className="text-4xl text-slate-300 border-2 rounded-full p-1 hover:transition ease duration-500 hover:border-sky-800" />
          <RiWhatsappFill className="text-4xl text-slate-300 border-2 rounded-full p-1 hover:transition ease duration-500 hover:border-sky-800" />
        </div>
        <span className="text-[1rem] text-slate-300 border-b-2 w-auto">Redes sociales</span>
      </div>
      <p className="text-[1rem] text-slate-300 text-center">© 2023 - Todos los direchos reservados</p>
    </footer>
  );
}

export default Footer;
