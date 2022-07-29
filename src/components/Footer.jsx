import React from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";

const Footer = ({ quotesState, userState, changeActive }) => {
  return (
    <div className='Footer'>
      <button onClick={changeActive} className={`footer-button-user-${userState}`}>
        <AiOutlineUser />
              </button>
      <button onClick={changeActive} className={`footer-button-quotes-${quotesState}`}>
        <AiOutlineBook />
      </button>
    
    
</div >
  )
}

export default Footer