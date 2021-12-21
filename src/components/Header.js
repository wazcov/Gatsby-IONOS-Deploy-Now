import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Gatsby Starter</strong>, an example
        <br />
        to get started with IONOS Deploy Now
        <br />
        coded by <a target="_blank" href="https://devscover.com">Devscover</a>.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
