import React from 'react'
import Image from 'next/image'

const whatsappLive = () => {
  return (
    <div style={{ position: 'fixed', bottom: '-2px', left: '-2px', zIndex: 9999 }}>
      <a className="whatsapp-link relative" href="https://api.whatsapp.com/send?phone=+212647810243&text=Bonjour" target="_blank" rel="noopener noreferrer">
        <div className="position-relative d-inline-block">
          <img src="/assets/img/whatsapp-log.png" className="rounded-circle" alt="Avatar" width={70} height={70} />
          <span className="ping-animation">
            <span></span>
          </span>
        </div>
      
        {/*<span className="position-absolute start-0 top-0 translate-middle p-2 whatp">
          <img src="/assets/img/whatsapp-log.png" alt="WhatsApp Live Chat" className="whatsapp-icon z-50" width={40} height={40} />
        
          <span className="d-flex w-100 h-100 align-items-center justify-content-center rounded-circle bg-success opacity-75 ping-animation"></span>
        </span>

        <img src="/assets/img/whatsapp-log.png" alt="WhatsApp Live Chat" className="whatsapp-icon z-50" width={40} height={40} />*/}


    </a>
     
        
        

    
         
      
    </div>
  )
}

export default whatsappLive;
