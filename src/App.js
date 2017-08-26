import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react'
import './style/App.css';
import Sobre from './components/sobre'
import Projects from './components/projects'
import Skills from './components/skills'
import Contact from './components/contact'
import MainMenu from './components/menu/menu'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {activeItem: 'sobre'}
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  handleMenuClick(name){
    this.setState({activeItem: name})
  }

  render() {
    const activeItem = this.state.activeItem
    return (
        <div>
          <MainMenu handleMenuClick={this.handleMenuClick} activeItem={activeItem} />
          {activeItem === 'sobre' ? <Sobre /> :
          activeItem === 'projetos' ? <Projects /> :
          activeItem === 'habilidades' ? <Skills /> :
          <Contact /> }
        </div>
        );
  }
}

export default App;
