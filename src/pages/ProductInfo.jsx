import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CardProduct from '../components/Home/CardProduct'
import ProductDeescription from '../components/ProductInfo/ProductDeescription'
import SliderImg from '../components/ProductInfo/SliderImg'
import useProductInfo from '../hooks/useProductInfo'
import './styles/productinfo.css'
const ProductInfo = () => {
  const [similarProducts, setSimilarProducts] = useState()
  const { id } = useParams()
  const { product } = useProductInfo(id)
  const allProducts = useSelector(state => state.products)

  useEffect(() => {
    if (allProducts && product) {
      const pivot = allProducts.filter(prod => prod.category.name === product.category)
      setSimilarProducts(pivot)
    }
  }, [allProducts, product])

  return (
    <div className='productinfor-container'>
      <div className="productinfo_sliderdescripcion">
        <SliderImg listImgs={product?.productImgs} />
        <ProductDeescription product={product} />
      </div>

      <section className='similar-products'>
        <h2 className='similar-products__title'>Discover similar items</h2>
        <div className="similar-products-container">
          {
            similarProducts?.map(simProd => {
              if (simProd.title !== product.title) {
                return (
                  <CardProduct key={simProd.id} product={simProd} />
                )
              }
            })
          }
        </div>
      </section>
    </div>
  )
}

export default ProductInfo