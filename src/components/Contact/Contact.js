import React, { Component } from 'react'
import ContactForm from './ContactForm'
import './Contact.css'
import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibleTooltip: false
    }
  }

  copyEmail = () => {
    this.setState({ visibleTooltip: true })
    setTimeout(() => this.setState({ visibleTooltip: false }), 3000)
  }

  render() {
    return (
      <section className='contact'>
        <div className='left-content'>
          <h1 className='section-header'>Contact Me</h1>
          <p>
            I am currently available for new opportunities. If you have a project
            that you want to get started, think you need my help with something,
            or just fancy saying hey - then get in touch!{' '}
            <span role='img' className='peace-emoji' aria-label='peace'>
              ✌
            </span>{' '}
          </p>
          <p>Use the form or email me directly at: </p>
          <Tooltip
            placement='bottom'
            overlay='Copied!'
            id='tooltip'
            visible={ this.state.visibleTooltip }
            onVisibleChange={ this.copyEmail }
            trigger={ ['click'] }
          >
            <CopyToClipboard text='lukasttatarunas@gmail.com'>
              <span onClick={ this.copyEmail } className='email-text'>
                {' '}
                lukasttatarunas@gmail.com
              </span>
            </CopyToClipboard>
          </Tooltip>
        </div>
        <div className='contact-content'>
          <ContactForm />
        </div>
      </section>
    )
  }
}

export default Contact