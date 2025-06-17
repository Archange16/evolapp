import React from 'react'
import Image from 'next/image'

const whatsappLive = () => {
  return (
    <div className="btnwhatsapp" style={{ position: 'fixed', bottom: '-2px', left: '-2px', zIndex: 9999 }}>
      <a className="whatsapp-link relative" href="https://api.whatsapp.com/send?phone=+212647810243&text=Bonjour" target="_blank" rel="noopener noreferrer">
        <div className="position-relative d-inline-block">
          <img src="/assets/img/whatsapp-log.png" className="rounded-circle" alt="Avatar" width={70} height={70} />
          <span className="ping-animation">
            <span></span>
          </span>
        </div>
    </a>
    </div>
  )
}

export default whatsappLive;
