import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import FilterCategory from '../components/Home/FilterCategory'
import FilterPrice from '../components/Home/FilterPrice'
import ToOrderProducts from '../components/Home/ToOrderProducts'
import './styles/home.css'
const Home = () => {
  const [productFilter, setProductFilter] = useState()
  const products = useSelector(state => state.products)
  const [inputValue, setInputValue] = useState("")
  const [inputPrice, setInputPrice] = useState({
    from: 0,
    to: Infinity
  })
  useEffect(() => {
    if (products) {

      setProductFilter(products)
    }
  }, [products])

  const handleChange = e => {
    const inputValue = e.target.value.toLowerCase().trim()
    const filter = products?.filter(prod => prod.title.toLowerCase().includes(inputValue))
    setProductFilter(filter)
    setInputValue(e.target.value)
  }
  const filterCallBack = prod => +prod.price >= inputPrice.from && +prod.price <= inputPrice.to
  return (
    <section className='home-container'>
      <input value={inputValue} onChange={handleChange} type="text" />
      <FilterPrice setInputPrice={setInputPrice} />
      <FilterCategory setInputValue={setInputValue} />
      <ToOrderProducts/>
      <div className="products-container">
        {
          productFilter?.filter(filterCallBack).length !== 0 ?
          productFilter?.filter(filterCallBack).map(product => (
            <CardProduct key={product.id} product={product} />
          ))
          :
          <h1>There are not products to this filter</h1>
        }
      </div>

    </section>
  )
}

export default Home