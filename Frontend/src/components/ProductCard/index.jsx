import { AiOutlineWhatsApp } from 'react-icons/ai'
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product._id}`}>
    <article className="h-[300px] rounded-lg border border-gray-200 bg-white shadow-md p-2 flex flex-col items-center justify-between gap-1 md:hover:scale-105 md:duration-300 md:hover:border md:hover:border-mariner-400">
      <div className="h-[55%] w-full">
        <img src={product.images[0].urlImage} alt={product.name} className="h-full w-full object-contain" />
      </div>
      <span className="text-lg text-slate-900 w-full truncate ">{product.name}</span>
      <div className="flex items-end justify-start w-full">
        <span className="text-xl font-bold text-slate-900">${product.price - Math.round(product.price * product.discount / 100)}</span>
        <span className="text-sm text-slate-900 line-through">${product.price}</span>
      </div>
      <button className="py-1 px-2 bg-green-800 text-white rounded-sm w-full text-center tracking-wider font-semibold">¡Pedilo Ya! <span className='inline-block translate-y-[3px] text-xl'><AiOutlineWhatsApp /></span></button>
    </article>
    </Link>
  )
}

export default ProductCard;
