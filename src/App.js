import React, { Component } from 'react'
import { Link } from 'react-scroll'
import Particles from 'react-particles-js'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
import Navigation from './components/Navigation/Navigation'
import MobileNavigation from './components/Navigation/MobileNavigation'
import './App.css'

const particleConfig = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    size: {
      value: 3,
      random: true
    },
    opacity: {
      value: 0.2,
      random: false
    },
    line_linked: {
      opacity: 0.3
    }
  },
  interactivity: {
    detect_on: `window`,
    events: {
      onhover: {
        enable: true,
        mode: `repulse`
      }
    },
    resize: true
  }
}

class App extends Component {

  render() {
    return (
      <div id='outer-container'>
        <Particles className='particles-js' params={ particleConfig } />
        <MobileNavigation />
        <div id='page-wrap'>
          <header>
            <div className='header-content'>
              <div className='header-text'>
                <h1 className='header-name'>Lukas Tatarūnas</h1>
                <h3 className='subheader'>Web Developer</h3>
              </div>
              <Link to='projects' offset={ -100 } smooth={ true } duration={ 500 }>
                <input
                  type='button'
                  className='standard-button'
                  value='View Projects'
                />
              </Link>
              <div className='linkedin-github'>
                  <a className='linkedin' href='https://www.linkedin.com/in/lukas-tatar%C5%ABnas-17343a154/' target='_blank' rel='noopener noreferrer'>
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a className='github' href='https://github.com/lukastatarunas' target='_blank' rel='noopener noreferrer'>
                    <i className="fab fa-github"></i>
                  </a>
              </div>
            </div>
          </header>
          <Projects name='projects' />
          <Skills name='skills' />
          <Contact name='contact' />
        </div>
        <Navigation />
      </div>
    )
  }
}

export default App