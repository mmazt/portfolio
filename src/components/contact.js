import React from 'react'
import {Transition} from 'semantic-ui-react'

class contact extends React.Component {
  constructor(props){
    super(props)
    this.state = {animation: 'fly up'}
  }
  
  componentWillMount(){
    if(this.props.previous === 'sobre' || this.props.previous === 'projeto' || this.props.previous === 'habilidades' ){
      this.setState({animation: 'fly up'})
    } else {
      this.setState({animation: 'fly down'})
    }
  }
  render(){
    return(
      <Transition transitionOnMount={true} unmountOnHide={true} duration={500} animation={this.state.animation}  >
      <div className='contato'>Contato</div>
      </Transition>
    )
  }
}

export default contact