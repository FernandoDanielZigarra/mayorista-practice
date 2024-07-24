import { Link } from 'react-router-dom';
import BtnBuy from '../BtnBuy';

function ProductCard({ product }) {
  return (
    <article className="h-[300px] max-w-[200px] rounded-lg border border-gray-200 bg-white shadow-md p-3 flex flex-col items-center justify-between gap-1 md:hover:scale-105 md:duration-300 md:hover:border md:hover:border-mariner-400">
      <div className="h-[55%] w-full">
        <Link to={`/product/${product._id}`}>
          <img src={product.images[0].urlImage} alt={product.name} className="h-full w-full object-contain" />
        </Link>
      </div>
      <span className="text-lg text-slate-900 w-full truncate">{product.name}</span>
      <div className="flex items-end justify-start w-full">
        <span className="text-xl font-bold text-slate-900">${product.price - Math.round(product.price * product.discount / 100)}</span>
        <span className="text-sm text-slate-900 line-through">${product.price}</span>
      </div>
      <BtnBuy product={product} />
    </article>
  )
}

export default ProductCard;
