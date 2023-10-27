/* import { useState } from 'react'; */
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';
import ProductsList from '../../components/ProductsList';

function ResultSearch() {
  const { query } = useParams();
  const { data } = useFetch(`${import.meta.env.VITE_BASE_URL}/api/v1/products`);
  const quitarAcentos = (cadena) => {
    const acentos = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U' };
    const result = cadena.split('').map(letra => acentos[letra] || letra).join('').toString();
    return result;
  }
  const results = data ? data.filter((product) => {
    return quitarAcentos(product.name.toLowerCase()).includes(query.toLowerCase());
  }) : []
  return (
    <main className="flex flex-col bg-mariner-900 rounded-none w-full min-h-[80vh]">
      <div className="flex items-center justify-center flex-col gap-1 mt-3">
        <img src="https://i.pinimg.com/1200x/ec/d9/c2/ecd9c2e8ed0dbbc96ac472a965e4afda.jpg" alt="" className="w-16 h-16 rounded-[50%]" />
        <span className="text-xl text-white">Empresa</span>
      </div>
      <h1 className="text-3xl text-center my-5 text-slate-100 underline tracking-wide">Resultados de la búsqueda</h1>
      <div className={`rounded-t-3xl pt-5 w-full shadow-[inset_0px_4px_13px_4px_#00000024] bg-slate-100 pb-5 ${results.length < 1 ? 'flex justify-center items-center flex-col' : ''} min-h-[80vh]`}>
        {
          results.length < 1 ? (<><h2 className='text-3xl w-max text-gray-800 tracking-wide'>No se encontraron resultados</h2><img src='https://www.denmakers.in/img/no-results.png' alt='Not result found' /></>) : <ProductsList products={results} />
        }
      </div>
    </main>
  )
}

export default ResultSearch;
