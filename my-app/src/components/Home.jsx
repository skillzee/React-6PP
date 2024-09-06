import React from 'react'
import Product from './Product';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"
import Loader from './Loader';

const Home = () => {
const arr=[1,2,3,4];

  const[temp, setTemp] =useState(0);

  const [coins, setCoins] = useState([])
  const[loading, setLoading] = useState(true);

  useEffect(()=>{
    

    const fetchAllCoins = async()=>{

      const {data} = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=20")
      // console.log(data);

      setCoins(data)
      setLoading(false)

    }
    

    fetchAllCoins()

  }, [])

  return (


    <div>
      {
        loading? <Loader/> : coins.map( i=>(
          <Product name={i.name} symbol={i.symbol} key={i.id} imgSrc={i.image}
          price= {i.current_price}/>
      ))
      }
        
    </div>

  )
}

export default Home