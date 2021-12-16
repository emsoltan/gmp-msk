import React from 'react'
import {Link} from "react-router-dom"
import "./Footer.css"
const Footer = () => {
    return (
      <div className="footer">
        <ul className="footer_list">
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">Artist's Bandcamp</Link>
          </li>
          <li>
            <Link to="/">Press</Link>
          </li>
        </ul>
        <p>{String.fromCharCode(169)} e-mad 2021</p>
      </div>
    );
}

export default Footer
