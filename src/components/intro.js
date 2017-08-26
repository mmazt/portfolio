import React, { Component } from 'react';
import {Grid, Image} from 'semantic-ui-react'
import foto from '../images/foto-pixel.jpg'

class Intro extends Component {

  
  render(){
    return(
      <div id='intro'>
      <Grid centered>
      <Grid.Row>
        <Grid.Column width={2} >
          <Image src={foto} alt='foto' shape='circular' />
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
    )
  }
}

export default Intro