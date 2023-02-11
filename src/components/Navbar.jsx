import React, { useEffect } from 'react'
import logoW from '../images/logo-light.png'
import logoB from '../images/logo-dark.png'

const Navbar = () => {
    const [state, setState] = React.useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {
        window.scrollY>120 ? setState(true) : setState(false)
    }

  return (
    <div className={`navbar ${state ? 'whiteBg' : 'transparent'}`}>
        <div className="container">
            <div className="navbar__content">
                <div className="navbar__left">
                    <img src={`${state ? logoB : logoW}`} alt='img' />
                    {/* <img src="../images/logo-light.png" alt='img' /> */}
                </div>
                <ul className="navbar__right">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Showcase</a>
                    </li>
                    <li>
                        <a href="">Portfolio</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar