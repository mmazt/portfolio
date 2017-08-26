import React from 'react'
import {Transition, Grid} from 'semantic-ui-react'
import Desenvolvimento from './desenvolvimento'
import Design from './design'


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
      <div className='habilidades'>
      <Grid padded >
        <Grid.Row>
          <Grid.Column width={14} style={{ paddingTop: '80px'}} floated='right'>
            <h2>Habilidades</h2>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column width={14} style={{paddingLeft:'30px'}} floated='right'>
          <h3>Desenvolvimento</h3>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={14} style={{paddingLeft:'30px'}} floated='right'>
            <Desenvolvimento />
          </Grid.Column>
          </Grid.Row>
        <Grid.Row >
        <Grid.Column width={14} style={{paddingLeft:'30px'}} floated='right'>
        <h3>Desgin</h3>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column width={14} style={{paddingLeft:'30px'}} floated='right'>
        <Design />
      </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
      </Transition>
    )
  }
}

export default Skills