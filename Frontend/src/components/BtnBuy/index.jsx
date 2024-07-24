import { AiOutlineShoppingCart } from 'react-icons/ai'
function BtnBuy({ product }) {
    const handleAddCart = (product) => {
        const cart = JSON.parse(localStorage.getItem('Cart'))
        if (!cart) {
            const newItem = {
                _id: product._id,
                name: product.name,
                price: product.price - Math.round(product.price * product.discount / 100),
                quantity: 1
            }
            localStorage.setItem('Cart', JSON.stringify([newItem]))
            return
        }
        const existProduct = cart.find(item => item._id === product._id)
        if (existProduct) {
            for (let i = 0; i < cart.length; i++) {
                if (cart[i]._id !== product._id) continue
                cart[i].quantity += 1
                cart[i].price += product.price - Math.round(product.price * product.discount / 100)
                localStorage.setItem('Cart', JSON.stringify(cart))
                return

            }
        }
        const newCart = { _id: product._id, name: product.name, price: product.price - Math.round(product.price * product.discount / 100), quantity: 1 }
        cart.push(newCart)
        localStorage.setItem('Cart', JSON.stringify(cart))
    }
    return (
        <button onClick={() => handleAddCart(product)} className="py-1 px-2 bg-green-800 text-white rounded-sm w-full text-center tracking-wider font-semibold">
            Agregar <AiOutlineShoppingCart className='inline' />
        </button>
    )
}

export default BtnBuy;
