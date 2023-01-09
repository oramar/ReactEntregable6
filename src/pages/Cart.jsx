import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/Cart/CartProduct'
import { getUserCart } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'
import './styles/cart.css'
const Cart = () => {
    const dispatch = useDispatch()
    const cartPruducts = useSelector(state => state.cart)
    useEffect(() => {
        dispatch(getUserCart())
    }, [])

    const handleCheckout = () => {
        const URL = `https://e-commerce-api.academlo.tech/api/v1/purchases`
        const data = {
            street: "Green St. 1456",
            colony: "Southwest",
            zipCode: 12345,
            city: "USA",
            references: "Some references"
        }
        axios.post(URL, data, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getUserCart())
            })
            .catch(err => console.log(err))
    }
    return (
        <section className='cart-container'>
            <h2 className='cart-container__title'>Carrito de compras</h2>
            <div>
                {
                    cartPruducts?.map(product => (
                        <CartProduct key={product.id} product={product} />
                    ))
                }
            </div>
            <footer className='cart-footer'>
                <span className='cart-footer__total'>Total: </span>
                <p className='cart-footer__totalvalue'>
                    {
                        cartPruducts ?
                            cartPruducts.reduce((acumulador, valorActual) => {
                                return Math.floor( valorActual.price * valorActual.productsInCart.quantity + acumulador)
                            }, 0)
                            : 0
                    }
                </p>
                <button className='cart-footer__btn' onClick={handleCheckout}>Checkout</button>
            </footer>
        </section>
    )
}

export default Cart