import React, { useEffect } from 'react'
import {useState } from 'react'
import './Order.scss'

function Order({render, setRender}) {
    const [active, setActive] =   useState(0)
    const [data, setData] = useState(JSON.parse(window.localStorage.getItem('data')))
    useEffect(() => {
        setData(JSON.parse(window.localStorage.getItem('data')))
    }, [render])

    function fnLocalDelete (id) {
        let locData = JSON.parse(window.localStorage.getItem('data'))
         window.localStorage.setItem('data', JSON.stringify(locData.filter((item) => item.id !== id)))
         setRender(!render)
    }
    return (
    <div className='order'>
        <h1 className='order__title'>Orders #34562</h1>
        <div className="order__action">
            <button onClick={() => setActive(0)} className={active == 0 ? 'active' : null}  clas>Dine in </button>
            <button onClick={() => setActive(1)} className={active == 0 ? 'active' : null}>To Go</button>
            <button onClick={() => setActive(2)} className={active == 0 ? 'active' : null}>Delivery </button>
        </div>
        <div className="order__top">
            <b>Item</b>
            <span >
                <b>Qty</b>
                <b>Price</b>
            </span>
        </div>
        <ul className="order__list">
            {
                data && data.map((item) => (
                    <li key={item.id} className='order__item'>
                        <div className='item__top'>
                            <img src={`https://cp.ectn.uz/files/${item.img}`} alt="" />
                            <span>
                                <h4>{item.title}</h4>
                                <p> {item.price}</p>
                            </span>
                            <div>
                            <button>{item.count}</button>
                            <b>{item.price}</b>
                            </div>
                        </div>
                        <div className="item__bottom">
                            <input type="text"  placeholder='order note ...' />
                            <button onClick={() => fnLocalDelete(item.id)}><i className="bi bi-trash3"></i></button>
                        </div>
                    </li>

                ))
            }
        </ul>
        <button className="order__payment">Continue to payment</button>
    </div>
  )
}

export default Order
