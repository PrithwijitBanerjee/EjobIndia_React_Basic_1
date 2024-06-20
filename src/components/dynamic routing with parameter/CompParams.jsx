// import React from 'react'
import { useParams } from 'react-router-dom'

export default function CompParams() {
    const par = useParams()
    const {name, id} = par
  return (
    <div>
    <h2>Page name is {name}</h2>
      <h2>ID is is {id}</h2>
    </div>
  )
}

