import React from 'react'
import {Transition, Grid, Image} from 'semantic-ui-react'
import {criarNuvem} from '../scripts/RandomEstrelasNuvems'
import Nuvem from './nuvens'
import flor1 from '../images/flor1.png'
import flor2 from '../images/flor2.png'
import flor3 from '../images/flor3.png'
import mini_milton from '../images/mini-milton.png'
import thais from '../images/thais.png'
import pug from '../images/pug.png'
import rock_island from '../images/rock-island.png'
import tree from '../images/tree.png'

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
    let nuvem = criarNuvem(3, 2)
    this.setState({nuvens_grandes: nuvem.nuvem_grande, nuvens_pequenas: nuvem.nuvem_pequena})
  }
  render(){
    const tamanho_ceu = window.innerHeight * 0.25
    return(
      <Transition transitionOnMount={true} unmountOnHide={true} duration={500} animation={this.state.animation}  >
      <div className='contato'>
      <div  style={{width: '100%', height:{tamanho_ceu}, position:'relative'}}>
      {this.state.nuvens_grandes.map((nuvem, i) => <Nuvem key={i} x={nuvem.x} y={nuvem.y} size={nuvem.size} classe='nuvem_grande'/>)}
      {this.state.nuvens_pequenas.map((nuvem, i) => <Nuvem key={i} x={nuvem.x} y={nuvem.y} size={nuvem.size} classe='nuvem_pequena'/>)}
    </div>
        <Grid centered style={{ paddingTop: '8%'}} padded>
          <Grid.Row style={{zIndex: '1000'}}>
            <h1>Contato</h1>
          </Grid.Row>
          <Grid.Row style={{zIndex: '1000'}}>
            <Grid.Column width={3}>
            <h2>+55 (11) 97065-8184</h2>
            <h2>mazetto.milton@gmail.com</h2>
            <h2>Campinas e RMC</h2>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ position:'relative', paddingTop: '8%'}}>
            <Grid.Column width={3} verticalAlign='bottom' style={{marginBottom: '-60px', marginLeft:'-90px', zIndex: '1000'}}>
              <img src={tree} />
            </Grid.Column>
            <Grid.Column width={1} verticalAlign='bottom' style={{marginBottom: '-40px', marginLeft:'-110px'}}>
              <img src={pug}  />
            </Grid.Column>
            <Grid.Column width={1} verticalAlign='bottom' style={{marginBottom: '-40px', marginLeft:'-50px'}}>
              <img src={thais} />
            </Grid.Column>
            <Grid.Column width={1} verticalAlign='bottom' style={{marginBottom: '-40px', marginLeft:'-50px'}}>
            <img src={mini_milton} />
            </Grid.Column>
            <Grid.Column width={1} verticalAlign='bottom' style={{marginBottom: '-40px', marginLeft:'-50px'}}>
            <img src={flor1} />
            </Grid.Column>
            <Grid.Column width={1} verticalAlign='bottom' style={{marginBottom: '-40px'}}>
            <img src={flor2} />
            </Grid.Column>
            <Grid.Column width={1} verticalAlign='bottom' style={{marginBottom: '-40px', marginLeft:'-50px'}}>
            <img src={flor3} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
            <img src={rock_island} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      </Transition>
    )
  }
}

export default contact