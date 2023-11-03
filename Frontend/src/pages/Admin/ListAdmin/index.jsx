import { BsPenFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
/* import axios from 'axios' */

function ListAdmin({ products,deleteProduct }) {

  return (
    <div className="w-full flex flex-col gap-1">
      <ul className="w-full list-none my-5 flex flex-col gap-5">
        {
          products.map((product) => (
            <li key={product._id} className="w-full h-20 border border-gray-500 flex pr-2">
              <img src={product.images[0].urlImage} alt="" className="w-30 h-full object-cover flex-none" />
              <span className='flex-1 text-center self-center text-md font-semibold truncate md:text-xl'>{product.name}</span>
              <div className='flex flex-none gap-2 items-center'>
                <button className='h-max text-xl p-2 text-white border rounded-full bg-green-600'><BsPenFill /></button>
                <button className='h-max text-xl p-2 text-white border rounded-full bg-red-600' onClick={() => deleteProduct(product._id)}><AiFillDelete /></button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ListAdmin;
