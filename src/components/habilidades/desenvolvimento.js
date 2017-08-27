import React from 'react'
import {Grid} from 'semantic-ui-react'
import Item from './item'
import icon_bootstrap from '../../images/icones/bootstrap.png'
import icon_css3 from '../../images/icones/css3.png'
import icon_git from '../../images/icones/git.png'
import icon_html from '../../images/icones/html.png'
import icon_javascript from '../../images/icones/javascript.png'
import icon_jquery from '../../images/icones/jquery.png'
import icon_mysql from '../../images/icones/mysql.png'
import icon_php from '../../images/icones/php.png'
import icon_react from '../../images/icones/react.png'
import icon_redux from '../../images/icones/redux.png'
import icon_restful from '../../images/icones/restful.png'
import icon_semantic from '../../images/icones/semantic-ui.jpg'
import icon_wordpress from '../../images/icones/wordpress.png'


class Desenvolvimento extends React.Component{
  
  render(){

    return(
      <Grid style={{marginTop: '-45px'}} >
      <Grid.Column width={3} floated='right'>
        <Grid.Row>
          <Item name='Html 5' percent='90%' spacer='10%' icon={icon_html} />
        </Grid.Row>
        <Grid.Row>
        <Item name='Redux' percent='70%' spacer='30%' icon={icon_redux} />
        </Grid.Row>
        <Grid.Row>
        <Item name='Semantic-UI' percent='80%' spacer='20%' icon={icon_semantic} />
        </Grid.Row>
        <Grid.Row>
        <Item name='Wordpress' percent='70%' spacer='30%' icon={icon_wordpress} />
        </Grid.Row>
      </Grid.Column>


      <Grid.Column width={3} floated='right'>
        <Grid.Row>
        <Item name='CSS 3' percent='80%' spacer='20%' icon={icon_css3} />
        </Grid.Row>
        <Grid.Row>
        <Item name='RESTFUL API' percent='75%' spacer='25%' icon={icon_restful} />

        </Grid.Row>
        <Grid.Row>
        <Item name='Bootstrap' percent='80%' spacer='20%' icon={icon_bootstrap} />
        </Grid.Row>
      </Grid.Column>


      <Grid.Column width={3} floated='right'>
        <Grid.Row>
        <Item name='Javascript' percent='80%' spacer='20%' icon={icon_javascript} />
        </Grid.Row>
        <Grid.Row>
        <Item name='jQuery' percent='80%' spacer='20%' icon={icon_jquery} />
        </Grid.Row>
        <Grid.Row>
        <Item name='MySQL' percent='60%' spacer='40%' icon={icon_mysql} />
        </Grid.Row>
      </Grid.Column>


      <Grid.Column width={3} floated='right'>
        <Grid.Row>
        <Item name='React' percent='70%' spacer='30%' icon={icon_react}/>
        </Grid.Row>
        <Grid.Row>
        <Item name='PHP' percent='55%' spacer='45%' icon={icon_php} />
        </Grid.Row>
        <Grid.Row>
        <Item name='Git' percent='60%' spacer='40%' icon={icon_git} />
        </Grid.Row>
      </Grid.Column>

      </Grid>
    )
  }
}
export default Desenvolvimento