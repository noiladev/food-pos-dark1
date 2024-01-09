import React from 'react'
import './Top.scss'
import { data } from '../../lib/data'
import { useState } from 'react'
import Card from '../Card/Card'

function Top({render}) {
  const [active, setActive] = useState(window.localStorage.getItem('key') || 'Lavash')
  const [filData, setfilData] = useState(data.filter((item) => item.title == active)[0])  //.foods del
  function fnFilter(value = 'Lavash') {
    setfilData(data.filter((item) => item.title == value)[0])
    setActive(value)
  }
  console.log(filData);
    function fnLocalKey(value)  {
      fnFilter(value)
      window.localStorage.setItem('key', value)
    }

    let localData = []
    if(window.localStorage.getItem('data')) {
      localData = JSON.parse(window.localStorage.getItem('data'))
    }

    function fnAddData(item) {
      // debugger;
      if(localData.find((i) => i.id == item.id)) {
        localData.find((i) => i.id == item.id).price = localData.find((i) => i.id == item.id).price *1  + item.price *1
        localData.find((i) => i.id == item.id).count = localData.find((i) => i.id == item.id).count *1  +  1 *1
      }else {
        item.count = 1
        localData.push(item)
      }
      window.localStorage.setItem('data', JSON.stringify(localData))
      render.setRender(!render.render)
    }
  return (
    <div className='top'>
      <div className="top__info">
        <div>
          <h2>Jaegar Resto</h2>
          <p>Tuesday, 2Feb 2021</p>
        </div>
        <div>
          <i className="bi bi-search"></i>
          <input type="text" placeholder='Search for food, coffe, etc..' />
        </div>
      </div>
      <ul className="top__list">
        {
          data.slice(0, 6).map((item) => {
            return (
              <li className={active == item.title ? 'top__item active' : 'top__item'}>
                <button onClick={() => fnLocalKey(item.title)}  >{item.title}</button>
              </li>
            )
          })
        }
      </ul>
      <ul className='card__list'>
        {
          filData.foods.map((item, index) => ( //dildata.foods
            <li onClick={() => fnAddData(item)} key={index}>
              <Card data={item}  category={filData.title}/>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Top


