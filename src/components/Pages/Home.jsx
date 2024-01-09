import React, { useState } from 'react'
import Top from '../Home/Top/Top'
import './Home.scss'
import Order from '../Home/Order/Order'

function Home() {
  const [render, setRender] = useState(true)
  return (
    <div className='home'>
      <div className="home__main">
        <Top render={{render, setRender}} />
      </div>
      <Order render={render} setRender={setRender}/>
    </div>
  )
}

export default Home
