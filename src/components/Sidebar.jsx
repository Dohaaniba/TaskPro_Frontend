import React from 'react'
import {BiHome , BiMessage , BiSolidReport , BiStats , BiTask , BiHelpCircle} from 'react-icons/bi';
import '../css/Sidebar.scss';

const Sidebar = () => {
  return (
    <div className='menu'>
        <div className='logo1'>
            <img className='image' src="./logo.png" alt="logo" />
            <h2>TaskPro</h2>

        </div>
        <div className="menu--list">
            <a href="#" className="item">
                <BiHome className='icon' />
                Dashboard
            </a>
            <a href="#" className="item">
                <BiTask    className='icon'/>
                Assignement
            </a>
            <a href="#" className="item">
                <BiSolidReport  className='icon'/>
                Report
            </a>
            <a href="#" className="item">
                <BiStats  className='icon'/>
                Stats
            </a>
            <a href="#" className="item">
                <BiMessage  className='icon'/>
                Message
            </a>
            <a href="#" className="item">
                <BiHelpCircle  className='icon' />
                Help
            </a>
        </div>
    </div>
  )
}

export default Sidebar