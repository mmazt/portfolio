import React from 'react'
import {Grid} from 'semantic-ui-react'
import {Transition} from 'semantic-ui-react'


class PopScience extends React.Component{
  
  render(){
    return(
      <Transition visible={this.props.visibility} duration={800} animation='slide up' >
      <div style={{position: 'absolute', top: '0', left: '0'}}>
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={16}>
            <h2>PopScience! O mundo da ciência e da geologia de forma dinâmica e divertida!</h2>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
        <Grid.Column>
        <p>O objetivo do site é a divulgação de conhecimento cientifico de uma maneira mais simples e despojada, para um público jovem interessado no mundo da ciência. </p>
        
        <p>Esse projeto foi construído com a plataforma WordPress, com um tema adaptado as necessidades do site e scripts desenvolvidos em jQuery para aumentar as funcionalidades da paltaforma. Nesse projeto, eu fui responsável pela maior parte das tarefas de desenvolvimento, com o desenvolvimento do código (HTML, WordPress, CSS, jQuery) e também, participei da criação e edição de conteúdo visual (Photoshop e Illustrator). Além disso, também atuei na otimização de SEO e sou um dos colaboradores no que diz respeito a editoração e conteúdo escrito.</p>
        </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
      </Transition>
    )
  }
}
export default PopScience