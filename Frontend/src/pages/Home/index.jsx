import Carrousel from "./Carrousel";

function Home() {
  return (
    <div className="flex flex-col bg-slate-700">
    <div className="flex items-center justify-center flex-col gap-1 mt-3">
      <img src="https://i.pinimg.com/1200x/ec/d9/c2/ecd9c2e8ed0dbbc96ac472a965e4afda.jpg" alt="" className="w-16 h-16 rounded-[50%]"/>
      <span className="text-xl text-white">Empresa</span>
    </div>
    <h1 className="text-3xl w-full text-center my-5 text-slate-100 underline tracking-wide">Ofertas de la semana</h1>
      <section className="rounded-t-3xl pt-5 w-screen shadow-[inset_0px_4px_13px_4px_#00000024] bg-slate-100">
        <Carrousel />
        <h1>Home</h1>
      </section>
    </div>
  );
}

export default Home;
