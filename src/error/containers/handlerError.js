import React, { Component } from 'react'
import RegularError from '../components/regular-error'

class HandlerError extends Component {
  state = {
    handlerError: false,
  }
  componentDidCatch(error, info) {
    this.setState({
      handlerError: true,
    })
  }
  render() {
    if (this.state.handlerError) {
      return (
        <RegularError />
      )
    }
    return this.props.children
  }
}

export default HandlerError