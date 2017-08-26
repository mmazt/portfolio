import React from 'react'
import {Transition} from 'semantic-ui-react'

class MenuText extends React.Component{
  constructor(props){
    super(props)
    this.handleCase = this.handleCase.bind(this)
  }

  handleCase(){
    const {name} = this.props
    return name[0].toUpperCase() + name.slice(1)
  }
  
  render(){
    const {name, visible} = this.props
    return(
      <Transition visible={visible[name]} duration={500} animation='fade' >
      <div style={{color: 'white', position: 'absolute', right: '50px', top:'8px'}} >{this.handleCase()}</div>
    </Transition>
    )
  }
}
export default MenuText