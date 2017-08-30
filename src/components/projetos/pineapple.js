import React from 'react'
import {Grid, Image} from 'semantic-ui-react'
import {Transition} from 'semantic-ui-react'
import screen from '../../images/projetos/pineapple1.jpg'


class Pineapple extends React.Component{
  


  render(){
    return(
      <Transition visible={this.props.visibility} duration={500} animation='fade right' >
      <div style={{position: 'absolute', top: '0', left: '0'}}>
      <Grid centered >
      <Grid.Row>
        <Grid.Column width={16}>
          <h2 className='texto-basico'>Pineapple Acessórios</h2>
          <h3 className='texto-sub' >Desrotule e encontre um estilo para todos os momentos.</h3>
        </Grid.Column>
        
      </Grid.Row>

      <Grid.Row>
     
      <Grid.Column width={8}>
      <p className='texto-projetos'>Loja virtual de acessórios, que apresenta acessórios para todos tipo de ocasião. Da balada descolada, ao evento geek.</p>
      
      <p className='texto-projetos'>Para esse projeto foi contratado, para o backend a plataforma Iluria. Nele eu fui responsável pelo desenvolvimento do front-end, com o desenvolvimento do código (HTML, CSS e jQuery) e também, participei da criação e edição de conteúdo visual (Photoshop e Illustrator).</p>
      </Grid.Column>
      <Grid.Column width={8}>
      <a href='http://pineappleacessorios.com.br' target='_blank' rel="noopener noreferrer"><Image src={screen} />
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
export default Pineapple