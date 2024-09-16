import React from 'react'
import {useDispatch} from "react-redux"

const Home = () => {

  const dispatch = useDispatch()

  const handler = () =>{
    dispatch({
      type: "firstCase",
      payload: ["fds", "tyu", 'das']
    })
  }

  return(
    <div>
      <p>Home</p>
      <button onClick={handler}>Click</button>
    </div>
  )

}

export default Home