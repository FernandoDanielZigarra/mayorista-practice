import ProductCard from "../../components/ProductCard";
import { useFetch } from "../../hooks/useFetch";
import Carrousel from "./Carrousel";

function Home() {
  const { data } = useFetch('http://localhost:3000/api/v1/products');
  const offersHome = data ? data.sort((a,b) => b.discount - a.discount).slice(0, 6) : [];

  return (
    <main className="flex flex-col bg-slate-700 rounded-none w-full">
      <div className="flex items-center justify-center flex-col gap-1 mt-3">
        <img src="https://i.pinimg.com/1200x/ec/d9/c2/ecd9c2e8ed0dbbc96ac472a965e4afda.jpg" alt="" className="w-16 h-16 rounded-[50%]" />
        <span className="text-xl text-white">Empresa</span>
      </div>
      <h1 className="text-3xl text-center my-5 text-slate-100 underline tracking-wide">Ofertas de la semana</h1>
      <div className="rounded-t-3xl pt-5 w-full shadow-[inset_0px_4px_13px_4px_#00000024] bg-slate-100 pb-5">
          <Carrousel />
        <h1 className="text-3xl w-full text-center my-5 text-black underline tracking-wide">Productos destacados</h1>
        <section className="w-[90%] mx-auto h-auto flex flex-wrap justify-evenly gap-y-3">
          {offersHome?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Home;
