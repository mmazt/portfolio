import React from 'react'
import {Grid} from 'semantic-ui-react'

class Desenvolvimento extends React.Component{
  
  render(){

    return(
      <Grid >
      <Grid.Column width={3} floated='right'>
        <Grid.Row>
          Html 5
        </Grid.Row>
        <Grid.Row>
          Redux
        </Grid.Row>
        <Grid.Row>
          Semantic-UI
        </Grid.Row>
      </Grid.Column>


      <Grid.Column width={3} floated='right'>
        <Grid.Row>
          CSS 3
        </Grid.Row>
        <Grid.Row>
          RESTFUL API
        </Grid.Row>
        <Grid.Row>
          Bootstrap
        </Grid.Row>
      </Grid.Column>


      <Grid.Column width={3} floated='right'>
        <Grid.Row>
          Javascript
        </Grid.Row>
        <Grid.Row>
          jQuery
        </Grid.Row>
        <Grid.Row>
          MySQL
        </Grid.Row>
      </Grid.Column>


      <Grid.Column width={3} floated='right'>
        <Grid.Row>
          React
        </Grid.Row>
        <Grid.Row>
          PHP
        </Grid.Row>
        <Grid.Row>
          Git
        </Grid.Row>
      </Grid.Column>
      
      </Grid>
    )
  }
}
export default Desenvolvimento