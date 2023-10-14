import { AiOutlineWhatsApp } from 'react-icons/ai'

function ProductCard({product}) {
  return(
   <article className="h-[250px] w-[150px] rounded-lg border border-gray-100 bg-white shadow-md p-2 flex flex-col items-center justify-between">
    <div className="h-[55%] w-full">
      <img src={product.image.urlImage} alt={product.name} className="h-full w-full object-contain" />
    </div>
      <span className="text-lg tracking-tight text-slate-900 font-bold w-full">{product.name}</span>
    <div className="flex items-end justify-start w-full">
      <span className="text-xl font-bold text-slate-900">${product.price - Math.round(product.price * product.discount / 100)}</span>
      <span className="text-sm text-slate-900 line-through">${product.price}</span>
    </div>
    <button className="py-1 px-2 bg-green-800 text-white rounded-sm w-full text-center tracking-wider font-semibold">¡Pedilo Ya! <span className='inline-block translate-y-[3px] text-xl'><AiOutlineWhatsApp /></span></button>
   </article>
)
}

export default ProductCard;
