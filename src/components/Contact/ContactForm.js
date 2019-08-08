import React, { Component } from 'react'

class ContactForm extends Component {
  constructor() {
    super()
    this.state = {
      name: ``,
      email: ``,
      message: ``,
      messageStatus: false,
      buttonDisabled: false
    }
    this.form = React.createRef()
    this.validate = this.validate.bind(this)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ buttonDisabled: true })
    fetch(`http://localhost:3001/send`, {
      method: `POST`,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
    })
      .then(response => response.json())
      .then(status => {
        status === `success` ? this.successMessage() : console.log(status)
      })
  }

  successMessage = () => {
    this.setState({ name: `` })
    this.setState({ email: `` })
    this.setState({ message: `` })
    this.setState({ messageStatus: true })
    this.setState({ buttonDisabled: false })
    setTimeout(() => {
      this.setState({ messageStatus: false })
    }, 8000)
  }

  failMessage = () => {
    this.setState({ name: `` })
    this.setState({ email: `` })
    this.setState({ message: `` })
    alert(`Something went wrong. Email me directly at lukasttatarunas@gmail.com`)
  }

  updateName = e => {
    this.setState({ name: e.target.value })
  }

  updateEmail = e => {
    this.setState({ email: e.target.value })
  }

  updateMessage = e => {
    this.setState({ message: e.target.value })
  }

  validate() {
    this.form.current.reportValidity()
  }

  render() {
    let messageState = this.state.messageStatus ? `active` : `inactive`
    return (
      <form ref={ this.form } onSubmit={ this.handleSubmit } className='contact-form'>
        <input
          type='text'
          value={ this.state.name }
          onChange={ this.updateName }
          placeholder='Your name'
          className='name'
          required={ true }
        />
        <input
          type='email'
          value={ this.state.email }
          onChange={ this.updateEmail }
          className='email'
          placeholder='Your email'
          required={ true }
        />
        <textarea
          value={ this.state.message }
          onChange={ this.updateMessage }
          className='message'
          placeholder='Message'
          required={ true }
        />
        <div className='buttonInline'>
          <p className={`${ messageState }`}>Message Sent!</p>
          <input
            value='Send'
            className='standard-button'
            disabled={ this.state.buttonDisabled }
            onClick={ this.validate }
            type='submit'
          />
        </div>
      </form>
    )
  }
}

export default ContactForm