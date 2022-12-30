import React, { Component } from 'react'
import SkillsAside from './SkillsAside'
import resume from './assets/CV.pdf'
import './Skills.css'

class Skills extends Component {
  constructor(props) {
    super(props)
    this.fileUpload = React.createRef()
  }

  showFileUpload = () => {
    this.fileUpload.current.click()
  }

  render() {
    return (
      <section className='skills'>
        <div className='left-content'>
          <h1 className='section-header'>About me</h1>
          <p>
            I am a Web Developer based in Vilnius, Lithuania. I have a passion for
            learning and building things. I started my journey in 2017 as a
            Web Developer. Since then, I have worked by myself and in teams
            to build awesome experiences. You can find more about me on{" "}
            <a
              href='https://www.linkedin.com/in/lukas-tatar%C5%ABnas-17343a154/'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>{' '}
            and{' '}
            <a
              href='https://github.com/lukastatarunas'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
            .
          </p>
          <input
            type='button'
            value='View Resume'
            className='standard-button'
            onClick={ this.showFileUpload }
          />
          <a
            href={ resume }
            target='_blank'
            rel='noopener noreferrer'
            ref={ this.fileUpload }
            style={{ display: 'none' }}
          >
            {' '}
          </a>
        </div>
        <div className='skills-content'>
          <SkillsAside />
        </div>
      </section>
    )
  }
}

export default Skills