import React from 'react'
import './Card.scss'

function Card({data, category}) {
  return (
    <div className='card'>
      <img src={`https://cp.ectn.uz/files/${data.img}`} alt="" />
      <div>
          <h3>{data.title}</h3>
          <span>{data.price}</span>
          <br />
          <br />
          <p>{category.title}</p>
      </div>

    </div>
  )
}

export default Card
