import React, { Component } from 'react'


export default class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount,

    }
    this.isBoom = this.isBoom.bind(this)
  }

  isBoom() {
    if (this.state.secondsLeft === 0) {
      return 'Boom!'
    } else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }

  render() {
    return (
      this.isBoom()
    )
  }
}
// your Bomb code here!
