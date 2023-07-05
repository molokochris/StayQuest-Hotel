import React from 'react'
import '../assets/stylesheets/modal.css'

export default function Modal({openModal, setOpenModal}) {
    
  return (
    <div className='modal-container'>
        <div className='head'>StayQuest</div>
        <div className='s-head'>Standard Room</div>
        <div className='i-head'></div>
        <div className="z-section">
          <div className='rm-facilities'>facilities</div>
          <div className="rm-description">info</div>
          <div className='rm-price'>
            <div className='rm-price-brk'>Price breakdown</div>
            <div className='rm-pay'>pay</div>
          </div>
        </div>
        <button className='close-btn' onClick={() => setOpenModal(!openModal)}>X</button>
    </div>
  )
}
