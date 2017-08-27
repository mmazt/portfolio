import React from 'react'

class Nuvem extends React.Component {

  render(){
    return(
      <div style={{ top: this.props.y, left: this.props.x, width:this.props.size, height:this.props.size}} className={this.props.classe} ></div>
    )
  }
}

export default Nuvem