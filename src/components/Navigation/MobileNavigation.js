import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-scroll'
import './MobileNavigation.css'

class MobileNavigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  closeMenu() {
    this.setState(
      {
        menuOpen: !this.state.menuOpen
      },
      () => {
        document.body.style.overflow = 'initial'
      }
    )
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
    if (this.state.menuOpen === false) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'initial'
    }
  }

  render() {
    return (
      <Menu
        width={ '75%' }
        isOpen={ this.state.menuOpen }
        onStateChange={ state => this.handleStateChange(state) }
        right
        pageWrapId={ 'page-wrap' }
        outerContainerId={ 'outer-container' }
      >
        <div className='menu'>
          <Link
            onClick={() => this.closeMenu()}
            to='projects'
            spy={ true }
            offset={ -100 }
            smooth={ true }
            duration={ 500 }
          >
            Projects
          </Link>
          <Link
            onClick={ () => this.closeMenu() }
            to='skills'
            spy={ true }
            offset={ -100 }
            smooth={ true }
            duration={ 500 }
          >
            About
          </Link>
          <Link
            onClick={() => this.closeMenu()}
            to='contact'
            spy={ true }
            offset={ -100 }
            smooth={ true }
            duration={ 500 }
          >
            Contact
          </Link>
        </div>
      </Menu>
    )
  }
}

export default MobileNavigation