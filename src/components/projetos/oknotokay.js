import React from 'react'
import {Grid, Image} from 'semantic-ui-react'
import {Transition} from 'semantic-ui-react'
import screen from '../../images/projetos/oknotokay1.jpg'

class OkNotOkay extends React.Component{
  
  render(){
    
    return(
      <Transition visible={this.props.visibility} duration={500} animation='fade right' >
      <div style={{position: 'absolute', top: '0', left: '0'}}>
      <Grid centered stackable>
      <Grid.Row>
        <Grid.Column width={16}>
          <h2 className='texto-basico'>OkNotOkay</h2>
          <h3 className='texto-sub' >O seu guia do que vestir e do que não vestir!</h3>
        </Grid.Column>
        
      </Grid.Row>

      <Grid.Row>
     
      <Grid.Column width={8}>
      <p className='texto-projetos'>Esse site tem por objetivo auxiliar a criação de looks para um público feminino adulto, que possui independencia financeira e busca roupas tanto para momentos de lazer quanto para o trabalho. </p>
      
      <p className='texto-projetos'>Esse projeto foi construído com base na plataforma WordPress e ampla utilização da plataforma WooCommerce. A parte visual do site foi construída a partir da personalização de um 
      pré-existente tema e uso de scripts em jQuery e ES6. As funcionalidades do Woocommerce foram adaptadas através de scripts em PHP. 
      Nesse projeto, eu fui responsável pelo desenvolvimento, com o código (HTML, WordPress, CSS, jQuery, Javascript e PHP) e na implementação da plataforma.</p>
      </Grid.Column>
      <Grid.Column width={8}>
      <a href='http://oknotokay.com' target='_blank' rel="noopener noreferrer"><Image src={screen} />
      <br/>
      <p style={{textAlign: 'right', paddingRight:'30px'}}>Visitar o Site</p></a>
    </Grid.Column>
      </Grid.Row>
    </Grid>
      </div>
      </Transition>
    )
  }
}
export default OkNotOkay 