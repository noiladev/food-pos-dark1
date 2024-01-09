import React from 'react'
import './DTop.scss'
function top() {
  return (
    <div className='d__top'>    
      <div className="top__info">
        <div>
        <h2 className='title'>Dashboard</h2>
        <p>Tuesday, 2Feb 2021</p>
        </div>
      </div>
      <div className="top__static">
        <div className="static1">
          <h3>$10,243.00</h3>
          <p>Total Revanue</p>
        </div>
        <div className="static2">
          <h3>23,456</h3>
          <p>Total Dish Ordered</p>
        </div>
        <div className="static3">
          <h3>1,234</h3>
          <p>Total Customer</p>
        </div>
      </div>
      <div className="d__main">
        <div className="main__top">
          <h3>Order Report</h3>
          <button className='filter__btn'>Filter order</button>
        </div>
        <div className="main__nav">
          <ul className="main__list">
            <li className="main__item">Customer</li>
            <li className="main__item">Menu</li>
            <li className="main__item">Total Payment</li>
            <li className="main__item">Status</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
// backend frontend Mobile dev 3d design ux UI Graphic designer AI 
export default top
