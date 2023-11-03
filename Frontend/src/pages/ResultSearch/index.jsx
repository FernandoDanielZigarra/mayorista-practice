import { useParams } from 'react-router-dom'
import ProductsList from '../../components/ProductsList';
import Spinner from '../../components/Spinner';
import { useSearch } from '../../hooks/useSearch';
import NotResult from './NotResult';

function ResultSearch() {
  const { query } = useParams();
  console.log(query)
  const { data, isPending } = useSearch(`${import.meta.env.VITE_BASE_URL}/api/v1/products`, query)
  const result = data ? data : [];

  return (
    <main className="flex flex-col bg-mariner-900 rounded-none w-full min-h-[80vh]">
      <div className="flex items-center justify-center flex-col gap-1 mt-3">
        <img src="https://i.pinimg.com/1200x/ec/d9/c2/ecd9c2e8ed0dbbc96ac472a965e4afda.jpg" alt="" className="w-16 h-16 rounded-[50%]" />
        <span className="text-xl text-white">Empresa</span>
      </div>
      <h1 className="text-3xl text-center my-5 text-slate-100 underline tracking-wide">Resultados de la búsqueda</h1>
      <div className='rounded-t-3xl pt-5 w-full shadow-[inset_0px_4px_13px_4px_#00000024] bg-slate-100 pb-5'>
        {isPending && <Spinner />}
        {

          result.length > 0 ? <ProductsList products={result} /> : <NotResult />

        }
      </div>
    </main>
  )
}

export default ResultSearch;


/* (<><h2 className='text-3xl w-max text-gray-800 tracking-wide'>No se encontraron resultados</h2><img src='https://www.denmakers.in/img/no-results.png' alt='Not result found' /></>) */