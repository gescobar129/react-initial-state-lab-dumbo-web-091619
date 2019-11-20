// your Bomb code here!
import React from 'react'

class Bomb extends React.Component{

  state = {
    secondsLeft: this.props.initialCount
  }
  render(){
    return(
      <div>
        <h3>{ this.state.secondsLeft === 0 ? `Boom!`: `${this.state.secondsLeft} seconds left before I go boom!` }</h3>
      </div>
    )
  }
}

export default Bomb
