import ProductsList from "../../components/ProductsList";
import { useFetch } from "../../hooks/useFetch";

function Products() {
  const { data } = useFetch(`${import.meta.env.VITE_DEV_BASEURL}/api/v1/products`);
  return (
    <main className="flex flex-col bg-mariner-900 rounded-none w-full">
      <div className="flex items-center justify-center flex-col gap-1 mt-3">
        <img src="https://i.pinimg.com/1200x/ec/d9/c2/ecd9c2e8ed0dbbc96ac472a965e4afda.jpg" alt="" className="w-16 h-16 rounded-[50%]" />
        <span className="text-xl text-white">Empresa</span>
      </div>
      <h1 className="text-3xl text-center my-5 text-slate-100 underline tracking-wide">Listado de productos</h1>
      <div className="rounded-t-3xl pt-5 w-full shadow-[inset_0px_4px_13px_4px_#00000024] bg-slate-100 pb-5">
        <ProductsList products={data} />
      </div>
    </main>
  )
}

export default Products;
