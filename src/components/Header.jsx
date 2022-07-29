import React from 'react'
import { FiSearch } from "react-icons/fi";



const Header = ({ user }) => {
    return (
        <div className='Header'>
            <div className='header-button'>
                <button className='header-button-search'>
                    <FiSearch />
                </button>
                <button className='header-button-img'>
                    <img src={user?.picture.medium} alt="" />
                </button>
            </div>


        </div>
    )
}

export default Header