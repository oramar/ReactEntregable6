import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingOrderProducts,descendingOrderProducts } from '../../store/slices/products.slice'

const ToOrderProducts = () => {
    const dispach = useDispatch()
    const handleAscending=()=>{
        dispach(ascendingOrderProducts())
    }

    const handleDescending=()=>{
        dispach(descendingOrderProducts())
    }
  return (
    <div>
        <button onClick={handleAscending}>Ascending Order</button>
        <button onClick={handleDescending}>Descending Order</button>
    </div>
  )
}

export default ToOrderProducts