import React from 'react'
import {Transition, Grid, Header} from 'semantic-ui-react'
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
      <Transition transitionOnMount={true} duration={500} animation={this.state.animation}  >
      <div className='habilidades' style={{ minHeight:'100%'}} >
      <Grid >
        <Grid.Row>
          <Grid.Column width={15} style={{ paddingTop: '10px'}} floated='left'>
            <Header as='h2' className='texto-basico' >Habilidades</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column width={15} style={{paddingLeft:'30px'}} floated='left'>
          <Header className='texto-basico habilidade-header' as='h3'>Desenvolvimento</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{marginTop:'30px', marginLeft: '-30px'}} >
          <Grid.Column width={15} style={{paddingLeft:'-30px', marginLeft:'0'}} floated='left'>
            <Desenvolvimento />
          </Grid.Column>
          </Grid.Row>
        <Grid.Row >
        <Grid.Column width={15} style={{marginLeft:'30px'}} floated='left'>
        <Header as='h3' className='texto-basico  habilidade-header' >Design</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{marginTop:'-30px'}}>
        <Grid.Column width={15} style={{marginLeft:'-30px'}} floated='left'>
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