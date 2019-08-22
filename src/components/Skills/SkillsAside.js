import React from 'react'
import './SkillsAside.css'

const SkillsAside = () => {
  return (
    <ul className='skills-list'>
      <li style={{ borderRadius: '8px 0 0 0' }}>
        <i className='fab fa-html5' />
        <p>HTML5</p>
      </li>
      <li>
        <i className='fab fa-css3-alt' />
        <p>CSS3</p>
      </li>
      <li style={{ borderRadius: '0 8px 0 0' }}>
        <i className='fab fa-js-square' />
        <p>JavaScript ES6+</p>
      </li>
      <li>
        <i className='fab fa-react' />
        <p>React.js</p>
      </li>
      <li>
        <i className='fab fa-node-js' />
        <p>Node.js</p>
      </li>
      <li>
        <i className='fa fa-link' />
        <p>Redux.js</p>
      </li>
      <li style={{ borderRadius: '0 0  0 8px' }}>
        <i className='fas fa-database' />
        <p>PostgreSQL</p>
      </li>
      <li>
        <i className='fa fa-smile' />
        <p>UX / UI</p>
      </li>
      <li style={{ borderRadius: '0 0 8px 0' }}>
        <i className='fas fa-database' />
        <p>MongoDB</p>
      </li>
    </ul>
  )
}

export default SkillsAside