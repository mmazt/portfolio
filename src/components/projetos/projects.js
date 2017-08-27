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
      <Transition transitionOnMount={true} unmountOnHide={true} duration={500} animation={this.state.animation} >
      <div key='projetos' className='projetos'>
      <Grid style={{ paddingTop: '80px'}} padded>
        <Grid.Row>
          <Grid.Column width={15} floated='right'>
        <h2>Projetos</h2>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column width={4} floated='right'>
          <Menu vertical tabular secondary inverted>
            <Menu.Item name='popscience' active={activeItem === 'popscience'} onClick={this.handleMenuClick} >PopScience!</Menu.Item>
            <Menu.Item name='pineapple' active={activeItem === 'pineapple'} onClick={this.handleMenuClick}>Pineapple Acessórios</Menu.Item>
            <Menu.Item name='oknotokay' active={activeItem === 'oknotokay'} onClick={this.handleMenuClick}>OkNotOkay</Menu.Item>
          </Menu>
          </Grid.Column>
          <Grid.Column width={10}>
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