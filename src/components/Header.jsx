import React, { useState } from 'react'
// import '../sass/main.scss'

const Header = () => {
  const [state] = useState({header: 'About Us', link1: 'Home', link2: 'About Us'})
  return (
    <div className='header'>
        <div className="header__content">
            <h1 className="header__content-h1">About Us</h1>
            <div className="header__content-links">
                <a href="#">{state.link1}</a>
                <span className="header__content-links-span"></span>
                <a href="#">{state.link2}</a>
            </div>
        </div>
    </div>
  )
}

export default Header