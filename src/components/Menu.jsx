import React from 'react'
import { Link } from 'react-router-dom'


function Menu({onClick, open}) {
    //console.log(props)

    return (
        <div className="menu-bar">
           <Link to="/"><h3>Kona Coffee</h3></Link>
           <div onClick={onClick} className="menu-icon">
               <span className={`hamburger-line top ${open? "open" : ""}`}></span>
               <span className={`hamburger-line bottom ${open? "open" : ""}`}></span>
           </div>
        </div>
    )
}

export default Menu
