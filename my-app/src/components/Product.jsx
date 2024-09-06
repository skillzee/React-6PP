import React from 'react'
import {useParams} from "react-router-dom"


const Product = ({name, symbol, imgSrc, price}) => {

    const param = useParams()
  return (
    <div>
        <img src={imgSrc} alt={name} />
        <h1>{name}</h1>
        <p>{symbol}</p>
        <h6>Rupees {price}</h6>
    </div>
  )
}

export default Product