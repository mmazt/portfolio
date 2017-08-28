import React from 'react'
import {Grid} from 'semantic-ui-react'
import Item from './item'
import icon_illustrator from '../../images/icones/illustrator.png'
import icon_photoshop from '../../images/icones/photoshop.png'
import icon_responsivo from '../../images/icones/responsivo.png'
import icon_ux from '../../images/icones/ux.png'
import icon_wireframing from '../../images/icones/wireframing.png'

class Design extends React.Component{
  componentWillMount(){
    const tela = window.innerWidth
    this.setState({tela})
  }
  
  render(){
    return(
      <Grid stackable>

        <Grid.Column computer={3} tablet={8} floated='right'>
          <Grid.Row>
            <Item name='Photoshop' percent='70%' spacer='30%' icon={icon_photoshop} />
          </Grid.Row>
          <Grid.Row>
            <Item name='Wireframing' percent='80%' spacer='20%' icon={icon_wireframing} />
          </Grid.Row>
        </Grid.Column>

        <Grid.Column computer={3}  tablet={8}  floated='right'>
          <Grid.Row   >
            <Item name='Illustrator' percent='70%' spacer='30%' icon={icon_illustrator} />
          </Grid.Row>
          <Grid.Row>

          </Grid.Row>
        </Grid.Column>

      <Grid.Column computer={3} tablet={8}  floated='right' >
        <Grid.Row>
 <Item name='Responsivo' percent='80%' spacer='20%' icon={icon_responsivo}/>
        </Grid.Row>
        <Grid.Row>
        </Grid.Row>
      </Grid.Column>

      <Grid.Column computer={3}  tablet={8}  floated='right'>
        <Grid.Row>
 <Item name='Usabilidade' percent='80%' spacer='20%' icon={icon_ux} />
        </Grid.Row>
        <Grid.Row>
        </Grid.Row>
      </Grid.Column>
  </Grid>
    )
  }
}
export default Design