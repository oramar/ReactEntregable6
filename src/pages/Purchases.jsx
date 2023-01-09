import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PurchaseCard from '../components/Purchases/PurchaseCard'
import getConfig from '../utils/getConfig'
import './styles/purchases.css'
const Purchases = () => {
  const [purchsesList, setPurchsesList] = useState()
  useEffect(() => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/purchases`
    axios.get(URL, getConfig())
      .then(res => setPurchsesList(res.data.data.purchases))
      .catch(err => console.log(err))

  }, [])

  return (
    <section className='puschases-container'>
      <h1>My Purchases</h1>      
        {
          purchsesList?.map(purchase=>(
            <PurchaseCard key={purchase.id} purchase={purchase}/>
          ))
        }
     
    </section>
  )
}

export default Purchases