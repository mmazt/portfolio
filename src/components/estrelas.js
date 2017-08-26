import React from 'react'

class Estrela extends React.Component {

  render(){
    return(
      <div style={{ top: this.props.y, left: this.props.x, width:this.props.size, height:this.props.size}} className='estrela' ></div>
    )
  }
}

export default Estrela