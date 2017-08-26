import React from 'react'
import {Transition} from 'semantic-ui-react'


class Skills extends React.Component {
  constructor(props){
    super(props)
    this.state = {animation: 'fly up'}
  }
  
  componentWillMount(){
    if(this.props.previous === 'contato'){
      this.setState({animation: 'fly down'})
    } else {
      this.setState({animation: 'fly up'})
    }
  }

  render(){
    return(
      <Transition transitionOnMount={true} unmountOnHide={true} duration={500} animation={this.state.animation}  >
      <div className='habilidades'>Habilidades</div>
      </Transition>
    )
  }
}

export default Skills