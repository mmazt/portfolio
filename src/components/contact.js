import React from 'react'
import {Transition, Grid, Header} from 'semantic-ui-react'
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
      <div  className= 'ceu' style={{width: '100%', height:{tamanho_ceu}, position:'relative'}}>
      {this.state.nuvens_grandes.map((nuvem, i) => <Nuvem key={i} x={nuvem.x} y={nuvem.y} size={nuvem.size} classe='nuvem_grande'/>)}
      {this.state.nuvens_pequenas.map((nuvem, i) => <Nuvem key={i} x={nuvem.x} y={nuvem.y} size={nuvem.size} classe='nuvem_pequena'/>)}
    </div>

        <Grid centered style={{ paddingTop: '3%'}} padded>
          <Grid.Row style={{textAlign: 'center', zIndex: '1000'}}>
            <Header as='h1'  className='texto-basico'>Contato</Header>
          </Grid.Row>
          <Grid.Row style={{ paddingTop:'20px', zIndex: '1000'}}>
            <Grid.Column computer={3} tablet={5} mobile={16}>
            <Header as='h3' className='texto-basico texto-contato'>+55 (11) 97065-8184</Header>
            <Header as='h3'  className='texto-basico texto-contato'>mazetto.milton@gmail.com</Header>
            <Header as='h3'  className='texto-basico texto-contato'>Campinas e RMC</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='tablet' style={{ position:'relative', paddingTop: '1.5%'}}>
            <Grid.Column computer={3} tablet={4} verticalAlign='bottom' style={{marginBottom: '-60px', marginLeft:'-100px', zIndex: '1000'}}>
              <img src={tree}  alt='Família Feliz'/>
            </Grid.Column>
            <Grid.Column computer={1} tablet={2} verticalAlign='bottom' style={{marginBottom: '-40px', marginLeft:'-90px'}}>
              <img src={pug}  alt='Família Feliz' />
            </Grid.Column>
            <Grid.Column computer={1} tablet={2} verticalAlign='bottom' style={{marginBottom: '-40px', marginLeft:'-30px'}}>
              <img src={thais}  alt='Família Feliz'/>
            </Grid.Column>
            <Grid.Column computer={1} tablet={2} verticalAlign='bottom' style={{marginBottom: '-40px', marginLeft:'-20px'}}>
            <img src={mini_milton}  alt='Família Feliz'/>
            </Grid.Column>
            <Grid.Column computer={1} tablet={2} verticalAlign='bottom' style={{marginBottom: '-40px', marginLeft:'-30px'}}>
            <img src={flor1} alt='Família Feliz' />
            </Grid.Column>
            <Grid.Column computer={1} tablet={2} verticalAlign='bottom' style={{marginBottom: '-40px'}}>
            <img src={flor2}  alt='Família Feliz'/>
            </Grid.Column>
            <Grid.Column computer={1} tablet={2} verticalAlign='bottom' style={{marginBottom: '-40px', marginLeft:'-30px'}}>
            <img src={flor3}  alt='Família Feliz'/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='tablet'>
            <Grid.Column computer={7} tablet={16}>
            <img src={rock_island} alt='Família Feliz' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      </Transition>
    )
  }
}

export default contact