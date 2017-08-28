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
      
      <Transition transitionOnMount={true} duration={300} animation={this.state.animation} >
      <div className='sobre'>
      <div id='campo_estrelas' style={{width: '100%', position:'relative'}}>
        {this.state.estrelas.map((estrela, i) => <Estrela key={i} x={estrela.x} y={estrela.y} size={estrela.size}/>)}
      </div>
      <Grid centered style={{ paddingTop: '50px'}} stackable padded >

        <Grid.Row>
            <Image src={foto} alt='foto' inline shape='circular'  verticalAlign='middle' />
        </Grid.Row>
        <Grid.Row>
            <h2 className='hello'>Olá!<br />
            Eu me chamo Milton Mazetto Junior<br />
            e sou um desenvolvedor Front-End.</h2>
        </Grid.Row>

      <Grid.Row >
      <Grid.Column id='sobre3' computer={10} mobile={16} textAlign='center' style={{margin:'0', paddingTop:'60px!important'}} >
        <p className='formacao'>Minha formação original é na área de História e Educação, mas nos últimos anos tenho trabalhado na área de TI, com foco no desenvolvimento de projetos na área de Front-End, Web Design.</p> <br/>
        <p className='formacao'>Acesse o meu <a>LinkedIn</a> e saiba mais sobre a minha trajetória e meus projetos, ou faça download do meu <a>Currículo</a>. </p><br />
         <p className='formacao'>Se você quiser saber como esse site foi criado, acesse o repositório no meu <a>GitHub</a> </p>
        </Grid.Column>
      </Grid.Row>
      </Grid>
      </div>
      </Transition>
      
    )
  }
}

export default Sobre