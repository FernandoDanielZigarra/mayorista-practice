/* import ProductCard from "../../components/ProductCard"; */
import ProductsList from "../../components/ProductsList";
import { useCustomFetch } from "../../hooks/useCustomFetch";
import Carrousel from "./Carrousel";


function Home() {
  
  const { data } = useCustomFetch(`${import.meta.env.VITE_BASE_URL}/api/v1/products`);
  const offersHome = data ? data.sort((a,b) => b.discount - a.discount).slice(0, 6) : [];

  return (
    <main className="flex flex-col bg-mariner-900 rounded-none w-full">
      <div className="flex items-center justify-center flex-col gap-1 mt-3">
        <img src="https://i.pinimg.com/1200x/ec/d9/c2/ecd9c2e8ed0dbbc96ac472a965e4afda.jpg" alt="" className="w-16 h-16 rounded-[50%]" />
        <span className="text-xl text-white">Empresa</span>
      </div>
      <h2 className="text-3xl text-center my-5 text-slate-100 underline tracking-wide">Ofertas de la semana</h2>
      <div className="rounded-t-3xl pt-5 w-full shadow-[inset_0px_4px_13px_4px_#00000024] bg-slate-100 pb-5">
          <Carrousel />
        <h1 className="text-3xl w-max m-auto mt-12 mb-5 text-gray-800 tracking-wide py-3 px-5 ">Productos destacados</h1>
        <ProductsList products={offersHome} />
      </div>
    </main>
  );
}

export default Home;
