import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState("")
  useEffect(() => {
    if(!localStorage.getItem('Cart')) {
      return
    }
    const initialCart = JSON.parse(localStorage.getItem('Cart'))
    let newOrder = ""
    for (let i = 0; i < initialCart.length; i++) {
      newOrder += initialCart[i].quantity + " - " + initialCart[i].name + ", ";
    }
    setOrder(newOrder)
    setCart(initialCart)
  }, [])

  useEffect(() => {
    let newOrder = ""
    for (let i = 0; i < cart.length; i++) {
      newOrder += cart[i].quantity + " - " + cart[i].name + ", ";
    }
    setOrder(newOrder)
  }, [cart])

  const handleMore = (id) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id === id) {
        cart[i].quantity += 1
        localStorage.setItem('Cart', JSON.stringify(cart))
        setCart(JSON.parse(localStorage.getItem('Cart')))
      }
    }
  }

  const handleLess = (id) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id === id) {
        cart[i].quantity -= 1
        localStorage.setItem('Cart', JSON.stringify(cart))
        setCart(JSON.parse(localStorage.getItem('Cart')))
      }
    }
  }
  return (
    <div className="w-[500px] h-[500px] flex justify-center items-center">
      {
        cart && cart.map((product) => (
          <div key={product._id} className="flex">
            <h1>{product.name}</h1>
            <button onClick={() => handleMore(product._id)} className="w-[50px] h-[50px] bg-black rounded-[50%] text-xl text-white">+</button>
            <button onClick={() => handleLess(product._id)} className="w-[50px] h-[50px] bg-black rounded-[50%] text-xl text-white">-</button>
            <strong>{product.quantity}</strong>
          </div>
        ))
      }
      <a href={`https://api.whatsapp.com/send?phone=1141853249&text=Hola, mi pedido es de: ${order}`}> Enviar</a>
    </div>
  )
}

export default Cart;
