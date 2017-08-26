import React, { Component } from 'react';
import {Grid, Image, Transition} from 'semantic-ui-react'
import foto from '../images/foto-pixel.jpg'
import Estrela from './estrelas'
import {criarEstrelas} from '../scripts/RandomEstrelasNuvems'




class Sobre extends Component {
  constructor(props){
    super(props)
    this.state = {animation: 'fly up', estrelas: []}
  }

  componentWillMount(){
  if(this.props.previous === 'contato' || this.props.previous === 'habilidades' || this.props.previous === 'projetos'){
      this.setState({animation: 'fly down'})
  }
    let arr = criarEstrelas(50)
    this.setState({estrelas: arr})
  }


  render(){
    return(
      
      <Transition transitionOnMount={true} unmountOnHide={true} duration={300} animation={this.state.animation} >
      <div className='sobre'>
      <div id='campo_estrelas' style={{width: '100%', position:'relative'}}>
        {this.state.estrelas.map((estrela, i) => <Estrela key={i} x={estrela.x} y={estrela.y} size={estrela.size}/>)}
      </div>
      <Grid centered style={{ paddingTop: '80px'}} padded >
      <Grid.Row>
        <Grid.Column width={2} mobile={4} tablet={4} >
            <Image src={foto} alt='foto'  shape='circular'  floated='right'  verticalAlign='middle' />
        </Grid.Column>
        <Grid.Column width={6} style={{marginTop: '20px'}}>     
            <h2 className='hello'>Olá!<br />
            Eu me chamo Milton Mazetto Junior<br />
            e sou um desenvolvedor Front-End.</h2>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      <Grid.Column width={9} style={{margin:'0', paddingTop:'80px'}} >
        <p className='formacao'>Minha formação original é na área de História e Educação, mas nos últimos anos tenho trabalhado com o desenvolvimento de projetos na área de Front-End, Web Design e Usabilidade.</p> 
        <p className='formacao'>Se quiser saber mais sobre a minha trajetória e sobre meus projetos, acesse meu LinkedIn ou faça download do meu Currículo</p>
        </Grid.Column>
      </Grid.Row>
      </Grid>
      </div>
      </Transition>
      
    )
  }
}

export default Sobre