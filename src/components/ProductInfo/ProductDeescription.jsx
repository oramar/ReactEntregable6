import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './styles/productdescription.css'
const ProductDeescription = ({ product }) => {
    const dispatch = useDispatch()
    const cart = useSelector(state =>state.cart)
    const [countri, setCountri] = useState(1)
    const handlePlus = () => {
        setCountri(countri + 1)
    }

    const handleMinus = () => {
        countri === 0 ? 0 : setCountri(countri - 1)
    }

    const handleCard = () => {
        const URL = `https://e-commerce-api.academlo.tech/api/v1/cart`
        const data = {
            id: product.id,
            quantity: countri
        }
        axios.post(URL, data, getConfig())
            .then(res => {
                dispatch(getUserCart())                
                console.log(res.data)
            })
            .catch(err => {
                if(err.response.status === 400){
                    //update
                    const URLPatch = 'https://e-commerce-api.academlo.tech/api/v1/cart'
                    const prevQuantity = cart.filter(e => e.id === product.id)[0].productsInCart.quantity
                    const data = {
                    id: product.id,
                    newQuantity: prevQuantity + countri
                    }
                    axios.patch(URLPatch, data, getConfig())
                    .then(res => {
                      console.log(res.data)
                      dispatch(getUserCart())
                    })
                    .catch(err =>console.log(err))
                    } 
            })
    }
    return (
        <article className='productdescription-container'>
            <h2 className='prod-description__title'>{product?.title}</h2>
            <p className='prod-description__description'>{product?.description}</p>
            <section className='prod-description__price'>
                <span className='price__title'>Price</span>
                <h3 className='price__price'>{product?.price}</h3>
            </section>
            <section className='prod-description__quantity'>
                <h3>Quantity</h3>
                <div className='quantity-container'>
                    <div className='quantity-container__btn' onClick={handleMinus}>-</div>
                    <div className='quantity-container__btn quantity-container__btn-county'>{countri}</div>
                    <div className='quantity-container__btn' onClick={handlePlus}>+</div>
                </div>
                
            </section>
            <button className='prod-description__btn' onClick={handleCard}>Add to Cart <i className="fa-solid fa-cart-plus"></i></button>
        </article>
    )
}

export default ProductDeescription