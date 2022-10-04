import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <Link className="nav-link link logo active">SHONEN DASH.</Link>
        <div className="love-website">
            Made With <i class="fa fa-heart" aria-hidden="true"></i>
        </div>
    </footer>
  )
}

export default Footer