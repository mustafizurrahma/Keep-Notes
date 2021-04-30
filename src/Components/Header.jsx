import React from 'react'
import Logo from './img/Header.png'

const Header = () => {
  return (
    <>
      <nav>
        <div id="Container">
          <div id="HeaderOcntentWrapper">
            <div id="Logo">
              <img src={Logo} alt="Error" />
            </div>
            <div id="headerTitle">
              <h2>Keep Notes</h2>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Header
