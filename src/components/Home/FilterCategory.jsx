import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllproducts, getProductsByCategory } from '../../store/slices/products.slice'
import './style/filtercategory.css'
const FilterCategory = ({setInputValue}) => {
    const [categories, setCategories] = useState()
    useEffect(() => {
        const URL = `https://e-commerce-api.academlo.tech/api/v1/products/categories`
        axios.get(URL)
            .then(res => setCategories(res.data.data.categories))
            .catch(err => console.log(err))
    }, [])
    const dispatch = useDispatch()
    const handleClick = id => {
        dispatch(getProductsByCategory(id))
        setInputValue("")
    }

    const handleAllProducts =()=>{
        dispatch(getAllproducts())
        setInputValue("")
    }
    return (
        <details>
            <summary>Categories</summary>
            <ul className='list'>
                <li className='list__category' onClick={handleAllProducts}>All Products</li>
                {
                    categories?.map(category => (
                        <li className='list__category' onClick={()=>handleClick(category.id)} key={category.id}>{category.name}</li>
                    ))
                }
            </ul>
        </details>
    )
}

export default FilterCategory