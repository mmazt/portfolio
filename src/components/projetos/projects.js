import React from 'react'
import {Grid, Transition, Menu} from 'semantic-ui-react'
import Popscience from './popscience'
import OkNotOkay from './oknotokay'
import Pineapple from './pineapple'


class Projects extends React.Component {
  constructor(props){
    super(props)
    this.state = {animation: 'fly up', activeItem:'popscience'}
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }
  
  componentWillMount(){
    if(this.props.previous === 'sobre'){
      this.setState({animation: 'fly up'})
    } else {
      this.setState({animation: 'fly down'})
    }
  }

  handleMenuClick(e, {name}){
    this.setState({activeItem: name})
  }

  render(){
    const {activeItem} = this.state
    return(
      <Transition transitionOnMount={true}  duration={500} animation={this.state.animation} >
      <div key='projetos' className='projetos' style={{minHeight:'100%'}}>
      <Grid  padded>
        <Grid.Row style={{ paddingTop: '20px', paddingLeft: '20px'}}>
        
        <h2 className='texto-basico'>Projetos</h2>
        
        
        </Grid.Row>
        <Grid.Row style={{margin: '0', padding: '0'}}>
        <Grid.Column computer={16} floated='left' >
        <Menu tabular secondary stackable style={{margin: '0', padding: '0'}} >
          <Menu.Item name='popscience' className='texto-menu' active={activeItem === 'popscience'} onClick={this.handleMenuClick} >PopScience!</Menu.Item>
          <Menu.Item name='pineapple' className='texto-menu' active={activeItem === 'pineapple'} onClick={this.handleMenuClick}>Pineapple Acessórios</Menu.Item>
          <Menu.Item name='oknotokay' className='texto-menu' active={activeItem === 'oknotokay'} onClick={this.handleMenuClick}>OkNotOkay</Menu.Item>
        </Menu>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row centered textAlign='center'>

          <Grid.Column width={12} tablet={15} textAlign='center'>
            <Popscience visibility={activeItem === 'popscience' ? true : false} /> 
            <Pineapple visibility={activeItem === 'pineapple' ? true : false} /> 
            <OkNotOkay visibility={activeItem === 'oknotokay' ? true : false} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
      </Transition>
    )
  }
}

export default Projects