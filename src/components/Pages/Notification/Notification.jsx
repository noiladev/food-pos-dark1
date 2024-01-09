import React, { useState } from 'react'
import './Notification.scss'
function Notification() {
      const [isMuted, setIsMuted] = useState(false)
      const toggleNotification = () => {
        setIsMuted(!isMuted)
      }

  return (
    <div>
      <div className="notifc">
            <h4>your notifications is:</h4>
            <button onClick={toggleNotification} className='notifc__btn'> 
            {isMuted ? 'Unmute' : 'Mute'}
            </button>
      </div>
    </div>
  )
}

export default Notification
