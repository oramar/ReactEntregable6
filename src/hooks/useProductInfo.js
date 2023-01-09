import axios from "axios"
import { useEffect, useState } from "react"
import CardProduct from "../components/Home/CardProduct"

const useProductInfo = (id) => {
const [product, setProduct] = useState()

const getProductById = ()=>{
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`
    axios.get(URL)
    .then(res=> setProduct(res.data.data.product))
    .catch(err=>console.log(err))
}
useEffect(() => {
    getProductById()
}, [id])

  return {product}
}

export default useProductInfo