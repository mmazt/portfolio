import React, { Component } from 'react';

import Sobre from './components/sobre'
import Projects from './components/projetos/projects'
import Skills from './components/habilidades/skills'
import Contact from './components/contact'
import MainMenu from './components/menu/menu'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {activeItem: 'sobre', previous:'contato'}
    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.handleVisibity = this.handleVisibity.bind(this)
  }


  handleMenuClick(name){
    let previous = this.state.activeItem
    this.setState({activeItem: name, previous})
  }

  handleVisibity(name){
    if(this.state.activeItem === name){
      return true
    } else {
      return false
    }
  }

  render() {
    const {activeItem} = this.state
    return (
        <div className='main'>
          <MainMenu handleMenuClick={this.handleMenuClick} activeItem={activeItem} />
          {activeItem === 'sobre' ?     <Sobre previous={this.state.previous} />:
          activeItem === 'projetos' ? <Projects previous={this.state.previous} /> :
          activeItem === 'habilidades' ? <Skills previous={this.state.previous}  /> :
          <Contact previous={this.state.previous} /> }
        </div>
        );
  }
}

export default App;
