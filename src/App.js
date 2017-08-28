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
    this.handleTouchStart = this.handleTouchStart.bind(this)
    this.handleTouchEnds = this.handleTouchEnds.bind(this)
    this.handleWheel = this.handleWheel.bind(this)
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

  shouldComponentUpdate(nextState){
    if(this.state.activeItem !== nextState.activeItem){
      return true
    } else {
      return false
    }
  }

  handleWheel(e){
    const {activeItem} = this.state
    const scrolledDown = document.getElementById('app').scrollHeight - document.getElementById('app').scrollTop === document.getElementById('app').clientHeight
    const scrolledUp = document.getElementById('app').scrollTop === 0
    const wheel = Math.max(-1, (e.deltaY || -e.deltaY))

    
    if(scrolledDown === true && (e.deltaY >= 25) && activeItem !== 'contato') {
      setTimeout(() => {activeItem === 'sobre' ? this.handleMenuClick('projetos') :  activeItem === 'projetos' ? this.handleMenuClick('habilidades') : activeItem === 'habilidades' && this.handleMenuClick('contato')}, 50)
    }
    if(scrolledUp === true && (e.deltaY <= -25) &&  activeItem !== 'sobre') {
      setTimeout(() => {activeItem === 'projetos' ? this.handleMenuClick('sobre') : activeItem === 'habilidades' ? this.handleMenuClick('projetos') : activeItem === 'contato' && this.handleMenuClick('habilidades') }, 50)
    }

  }

  //Inicio função que captura o swipe do Touch
  handleTouchStart(e){
    this.setState({touchX: e.changedTouches[0].clientX})
  }

  handleTouchEnds(e){
    const {activeItem} = this.state
    const scrolledDown = document.getElementById('app').scrollHeight - document.getElementById('app').scrollTop === document.getElementById('app').clientHeight
    const scrolledUp = document.getElementById('app').scrollTop === 0

    if(scrolledDown === true && e.changedTouches[0].clientX < this.state.touchX  ) {
      activeItem === 'sobre' ? this.handleMenuClick('projetos') :  activeItem === 'projetos' ? this.handleMenuClick('habilidades') : activeItem === 'habilidades' && this.handleMenuClick('contato')
    }
    if(scrolledUp === true && e.changedTouches[0].clientX > this.state.touchX) {
      activeItem === 'contato' ? this.handleMenuClick('habilidades') :  activeItem === 'habilidades' ? this.handleMenuClick('projetos') : activeItem === 'projetos' && this.handleMenuClick('sobre')
    }
  }
  //

  render() {
    const {activeItem} = this.state
    return (
        <div id='app' onWheel={this.handleWheel} onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnds} className='main'>
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
