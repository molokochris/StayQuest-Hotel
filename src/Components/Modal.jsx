import React from 'react'
import '../assets/stylesheets/modal.css'

export default function Modal({openModal, setOpenModal}) {
    
  return (
    <div className='modal-container'>
        <div className='head'>StayQuest</div>
        <div className='s-head'>Standard Room</div>
        <div className='i-head'></div>
        <button onClick={() => setOpenModal(!openModal)}>close</button>
    </div>
  )
}
