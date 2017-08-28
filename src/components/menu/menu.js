import React from 'react'
import {Menu, Grid} from 'semantic-ui-react'
import MenuItem from './item'
import MenuText from './text'

class MainMenu extends React.Component{
    constructor(props){
      super(props)
      this.state = {visible: {sobre: false, projetos: false, habilidades: false, contato: false}}
      this.handleEnterText = this.handleEnterText.bind(this)
      this.handleExitText = this.handleExitText.bind(this)
    }

    componentDidUpdate(prevState){
      let check = false
      for (let key in this.state.visible) {
        if(this.state.visible[key] === true){
          check = true
        }
        
      }
      if(check === true){
      this.setState({visible: {sobre: false, projetos: false, habilidades: false, contato: false}})
      }
    }

    handleEnterText(name){
      let {visible} = this.state
      visible[name] = true
      this.setState({visible})
    }
    handleExitText(name){
      let {visible} = this.state
      visible[name] = false
      this.setState({visible})
    }
  
  render(){
    const { activeItem } = this.props
    const { visible } = this.state
    const menuHeight = window.innerHeight * 0.4

    return(
      <Menu className='menu' floated='right' vertical secondary inverted icon style={{position: 'fixed', right:'20px', top:menuHeight}} >
      <Grid>
          <Grid.Row >
            <Grid.Column style={{position: 'relative'}}>
              <MenuText name='sobre' visible={visible} />
              <MenuItem name='sobre' activeItem={activeItem} handleMenuClick={this.props.handleMenuClick} handleEnterText={this.handleEnterText} handleExitText={this.handleExitText} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row >
            <Grid.Column style={{position: 'relative'}}>
              <MenuText name='projetos' visible={visible} />
              <MenuItem name='projetos' activeItem={activeItem} handleMenuClick={this.props.handleMenuClick} handleEnterText={this.handleEnterText} handleExitText={this.handleExitText} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row >
            <Grid.Column style={{position: 'relative'}}>
              <MenuText name='habilidades' visible={visible} />
              <MenuItem name='habilidades' activeItem={activeItem} handleMenuClick={this.props.handleMenuClick} handleEnterText={this.handleEnterText} handleExitText={this.handleExitText} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row >
            <Grid.Column style={{position: 'relative'}}>
              <MenuText name='contato' visible={visible} />
              <MenuItem name='contato' activeItem={activeItem} handleMenuClick={this.props.handleMenuClick} handleEnterText={this.handleEnterText} handleExitText={this.handleExitText} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Menu>
    )
  }
}

export default MainMenu