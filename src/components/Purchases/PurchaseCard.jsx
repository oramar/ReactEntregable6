import React from 'react'
import './styles/purchasecard.css'
const PurchaseCard = ({ purchase }) => {
    const datePurchase = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <article className='purchase'>
            <header className='purchase__header'>
                <h3 className='purchase__title'>{datePurchase.toLocaleDateString('es-US', options)}</h3>
            </header>
            <section className='purchase__body'>
                <ul className='purchase__lists'>
                    {
                        purchase.cart.products.map(product => (
                            <li className='purchase__list' key={product.id}>
                                <h4 className='purchase__list-title'>{product.title}</h4>
                                <span className='purchase__list-cant'>{product.productsInCart.quantity}</span>
                                <span className='purchase__list-price'>{product.price}</span>
                            </li>
                        ))
                    }
                </ul>
            </section>

        </article>
    )
}

export default PurchaseCard