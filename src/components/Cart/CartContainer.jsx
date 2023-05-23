import React, { useContext } from 'react'
import Cart from './Cart'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } = useContext(CartContext)

  let total = getTotalPrice()
   const navigate = useNavigate()


  const clearCartWithAlert = ()=>{
    Swal.fire({
      title: 'SEGURO QUE QUERES VACIAR TODO EL CARRITO?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'SI, VACIARLO!',
      denyButtonText: `NO, NO QUIERO`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire('SE LIMPIO EL CARRITO', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('EL CARRITO SE MANTIENE COMO ESTABA', '', 'error')
      }
    })
  }

  return (
    <div>
        <Cart navigate={navigate} total={total} clearCartWithAlert={clearCartWithAlert} cart={cart}  deleteProductById={deleteProductById} />
    </div>
  )
}

export default CartContainer