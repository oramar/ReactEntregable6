import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingOrderProducts,descendingOrderProducts } from '../../store/slices/products.slice'
import './style/toorderproducts.css'
const ToOrderProducts = () => {
    const dispach = useDispatch()
    const handleAscending=()=>{
        dispach(ascendingOrderProducts())
    }

    const handleDescending=()=>{
        dispach(descendingOrderProducts())
    }
  return (
    <div className='type-order'>
        <button className='type-order__btn type-order-ascending' onClick={handleAscending}>Ascending Order</button>
        <button className='type-order__btn type-order-descending' onClick={handleDescending}>Descending Order</button>
    </div>
  )
}

export default ToOrderProducts