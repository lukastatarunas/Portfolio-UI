import React, { Component } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import logoWhite from './assets/logo-white.svg'
import logoGreen from './assets/logo-green.svg'
import './Navigation.css'

class Navigation extends Component {
  scrollToTop = () => {
    scroll.scrollToTop()
  }
  
  render() {
    return (
      <nav className='full-nav'>
        <ul className='nav-list'>
          <li className='logo' onClick={ this.scrollToTop }>
            <div className='logo-container'>
              <img src={ logoWhite } alt='white-logo' className='logoWhite' />
              <img src={ logoGreen } alt='green-logo' className='logoGreen' />
            </div>
          </li>
          <li className='link'>
            <Link to='projects' offset={ -100 } smooth={ true } duration={ 500 }>
              Projects
            </Link>
          </li>

          <li className='link'>
            <Link to='skills' offset={ -100 } smooth={ true } duration={ 500 }>
              About
            </Link>
          </li>
          <li className='link'>
            <Link to='contact' smooth={ true } offset={ -100 } duration={ 500 }>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation