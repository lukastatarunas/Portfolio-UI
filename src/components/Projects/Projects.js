import React from 'react'
import smartBrain from './assets/smartbrain.png'
import smartBrainLogo from './assets/smartbrain-logo.svg'
import roboFriends from './assets/robofriends.png'
import roboFriendsLogo from './assets/robofriends-logo.svg'
import './Projects.css'

const Projects = () => {
  return (
    <section className='projects'>
      <h1 className='section-header'>Projects</h1>
      <div className='grid'>
        <figure className='effect'>
          <div className='project-logo-container'>
            <img
              className='projects-logo smart-logo'
              src={ smartBrainLogo }
              alt='project'
            />
          </div>
          <div className='background-container'>
            <img
              className='image-background'
              src={ smartBrain }
              alt='project'
            />
          </div>
          <figcaption>
            <div className='bottom-container'>
              <div className='portfolio-links'>
                <a
                  className='project-button'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/lukastatarunas/Face-Recognition-Web-App'
                >
                  Github
                </a>
                <a
                  className='project-button'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://lukastatarunas.github.io/Face-Recognition-Web-App/'
                >
                  Website
                </a>
              </div>
            </div>
            <p className='description'>
              Built using React.js and Machine Learning Clarifai API.
            </p>
          </figcaption>
        </figure>
        <figure className='effect'>
          <div className='project-logo-container'>
            <img
              className='projects-logo smart-logo'
              src={ roboFriendsLogo }
              alt='project'
            />
          </div>
          <div className='background-container'>
            <img
              className='image-background'
              src={ roboFriends }
              alt='project'
            />
          </div>
          <figcaption>
            <div className='bottom-container'>
              <div className='portfolio-links'>
                <a
                  className='project-button'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/lukastatarunas/Robofriends-Web-App'
                >
                  Github
                </a>
                <a
                  className='project-button'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://lukastatarunas.github.io/Robofriends-Web-App/'
                >
                  Website
                </a>
              </div>
            </div>
            <p className='description'>
              Built using React.js and Redux.js.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Projects