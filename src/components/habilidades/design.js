import React from 'react'
import {Grid} from 'semantic-ui-react'

class Design extends React.Component{
  
  render(){

    return(
      <Grid>

        <Grid.Column width={3} floated='right'>
          <Grid.Row>
            Html 5
          </Grid.Row>
          <Grid.Row>
            Redux
          </Grid.Row>
        </Grid.Column>

        <Grid.Column width={3} floated='right'>
          <Grid.Row>
            Html 5
          </Grid.Row>
          <Grid.Row>
            Redux
          </Grid.Row>
        </Grid.Column>
      <Grid.Column width={3} floated='right'>
        <Grid.Row>
          Html 5
        </Grid.Row>
        <Grid.Row>
          Redux
        </Grid.Row>
      </Grid.Column>
      
      <Grid.Column width={3} floated='right'>
        <Grid.Row>
          Html 5
        </Grid.Row>
        <Grid.Row>
          Redux
        </Grid.Row>
      </Grid.Column>
  </Grid>
    )
  }
}
export default Design