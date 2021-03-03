import React from 'react'
import campaigns from './assets/campaigns.png'
import eCommerce from './assets/ecommerce.png'
import smartBrain from './assets/smartbrain.png'
import smartBrainLogo from './assets/smartbrain-logo.svg'
import roboFriends from './assets/robofriends.png'
import roboFriendsLogo from './assets/robofriends-logo.svg'
// import lrt from './assets/lrt.jpg'
// import memoryGame from './assets/game.jpg'
// import gradient from './assets/gradient.png'
// import gradientLogo from './assets/gradient-logo.svg'
// import calculator from './assets/calculator.jpg'
// import calculatorLogo from './assets/calculator-logo.svg'
// import camperbnb from './assets/camperbnb.jpg'
// import troll from './assets/troll.jpg'
import './Projects.css'

const Projects = () => {
  return (
    <section className='projects'>
      <h1 className='section-header'>Projects</h1>
      <div className='grid'>
        <figure className='effect'>
          {/* <div className='project-logo-container'>
            <img
              className='projects-logo smart-logo'
              src={ smartBrainLogo }
              alt='project'
            />
          </div> */}
          <div className='background-container'>
            <img
              className='image-background'
              src={ eCommerce }
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
                  href='https://github.com/lukastatarunas/E-Commerce-Web-App'
                >
                  Github
                </a>
                <a
                  className='project-button'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://lukas-crown-clothing.herokuapp.com/'
                >
                  Website
                </a>
              </div>
            </div>
            <p className='description'>
              Built using React.js, Redux.js, GraphQL, Context API, Stripe API, Firebase, styled-components.
            </p>
          </figcaption>
        </figure>
        <figure className='effect'>
          {/* <div className='project-logo-container'>
            <img
              className='projects-logo smart-logo'
              src={ smartBrainLogo }
              alt='project'
            />
          </div> */}
          <div className='background-container'>
            <img
              className='image-background'
              src={ campaigns }
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
                  href='https://github.com/lukastatarunas/Campaigns-Web-App'
                >
                  Github
                </a>
                <a
                  className='project-button'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://friendly-stonebraker-874097.netlify.app/'
                >
                  Website
                </a>
              </div>
            </div>
            <p className='description'>
              Built using React.js, Redux.js, Moment.js, Material UI, styled-components.
            </p>
          </figcaption>
        </figure>
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
                  href='https://github.com/lukastatarunas/Face-Recognition-Web-App/'
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
              Built using React.js, Node.js, Express.js, Knex.js, PostgreSQL and Machine Learning Clarifai API.
            </p>
          </figcaption>
        </figure>
        <figure className='effect'>
          <div className='project-logo-container'>
            <img
              className='projects-logo robo-logo'
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
                  href='https://github.com/lukastatarunas/Robofriends-Web-App/'
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
        {/* <figure className='effect'>
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
              src={ lrt }
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
                  href='https://github.com/lukastatarunas/UI/'
                >
                  Github
                </a>
                <a
                  className='project-button'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://lrt-live.herokuapp.com/'
                >
                  Website
                </a>
              </div>
            </div>
            <p className='description'>
              Built using React.js, Node.js, Express.js, Bootstrap and LRT API.
            </p>
          </figcaption>
        </figure> */}
        {/* <figure className='effect'>
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
              src={ camperbnb }
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
                  href='https://github.com/lukastatarunas/Camperbnb/'
                >
                  Github
                </a>
                <a
                  className='project-button'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://camper-bnb.herokuapp.com/'
                >
                  Website
                </a>
              </div>
            </div>
            <p className='description'>
              Built using React.js.
            </p>
          </figcaption>
        </figure> */}
        {/* <figure className='effect'>
          <div className='project-logo-container'>
            <img
              className='projects-logo memory-logo'
              src={ smartBrainLogo }
              alt='project'
            />
          </div>
          <div className='background-container'>
            <img
              className='image-background'
              src={ memoryGame }
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
                  href='https://github.com/lukastatarunas/Memory-Puzzle-Game/'
                >
                  Github
                </a>
                <a
                  className='project-button'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://lukastatarunas.github.io/Memory-Puzzle-Game/'
                >
                  Website
                </a>
              </div>
            </div>
            <p className='description'>
              Built using HTML5, CSS3, JavaScript.
            </p>
          </figcaption>
        </figure> */}
        {/* <figure className='effect'>
          <div className='project-logo-container'>
            <img
              className='projects-logo calculator-logo'
              src={ gradientLogo }
              alt='project'
            />
          </div>
          <div className='background-container'>
            <img
              className='image-background'
              src={ gradient }
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
                  href='https://github.com/lukastatarunas/Background-Gradient-Generator/'
                >
                  Github
                </a>
                <a
                  className='project-button'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://lukastatarunas.github.io/Background-Gradient-Generator/'
                >
                  Website
                </a>
              </div>
            </div>
            <p className='description'>
              Built using HTML5, CSS3, JavaScript.
            </p>
          </figcaption>
        </figure> */}
        {/* <figure className='effect'>
          <div className='project-logo-container'>
            <img
              className='projects-logo calculator-logo'
              src={ calculatorLogo }
              alt='project'
            />
          </div>
          <div className='background-container'>
            <img
              className='image-background'
              src={ calculator }
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
                  href='https://github.com/lukastatarunas/iPhone-Calculator-Web-App/'
                >
                  Github
                </a>
                <a
                  className='project-button'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://lukastatarunas.github.io/iPhone-Calculator-Web-App/'
                >
                  Website
                </a>
              </div>
            </div>
            <p className='description'>
              Built using React.js.
            </p>
          </figcaption>
        </figure> */}
        {/* <figure className='effect'>
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
              src={ troll }
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
                  href='https://github.com/lukastatarunas/Meme-Generator/'
                >
                  Github
                </a>
                <a
                  className='project-button'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://generate-memes.herokuapp.com/'
                >
                  Website
                </a>
              </div>
            </div>
            <p className='description'>
              Built using React.js.
            </p>
          </figcaption>
        </figure> */}
      </div>
    </section>
  )
}

export default Projects