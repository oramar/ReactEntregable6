import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './styles/cartProduct.css'

const CartProduct = ({ product }) => {
    const dispatch = useDispatch()
    const cartPruducts = useSelector(state => state.cart)


    const handleDelete = () => {
        const URL = `https://e-commerce-api.academlo.tech/api/v1/cart/${product.id}`
        axios.delete(URL, getConfig())
            .then(res => {
                dispatch(getUserCart())
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }
    return (
        <article className='cart-product'>
            <header className='cart-product__header'>
                <h4 className='cart-product__title-brand'>{product.brand}</h4>
                <h3 className='cart-product__title'>{product.title}</h3>
            </header>
            <button className='cart-product__btn-delete' onClick={handleDelete}>
                <i className="fa-regular fa-trash-can"></i>
            </button>
            <div className='cart-product__quantity'>
            <p className='quantity__title'>Quantity: </p>
            <span className='quantity__value'>{product.productsInCart.quantity}</span>  
            </div>
            <div className='cart-product__unitprice'>
                <p className='unitprice__title'>Unit Price: </p>
                <span className='unitprice__value'>{product.price}</span>
            </div>

            <div className='cart-product__totalprice'>
                <p className='totalprice__title'>total Price: </p>
                <span className='totalprice__value'>
                    {
                        product && product.productsInCart.quantity * product.price

                    }
                </span>
            </div>
      
        </article >
    )
}

export default CartProduct