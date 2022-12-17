import React from 'react'

function SidebarLinks() {
  return (
    <div>
    <a id="home" className="menu-item" href="/">Home</a>
    <a id="about" className="menu-item" href="/about">About</a>
    <a id="contact" className="menu-item" href="/contact">Contact</a>
    <a className="menu-item--small" href="">Settings</a>
    </div>
  )
}

export default SidebarLinks