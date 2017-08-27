import React from 'react'
import {Grid, Image} from 'semantic-ui-react'

class SkillItem extends React.Component{
  
  render(){
    const {percent, name, icon, spacer} = this.props
    return(
      <Grid style={{position: 'relative', margin:'25px'}} >
        <Grid.Row>
      <p className='skill-legenda' style={{position: 'absolute'}}>{name}</p>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{position: 'absolute', left: '-7px', zIndex:'1000', width: '40px', height: '40px'}} >
        <img src={icon} style={{position: 'absolute', zIndex:'1000'}} alt='Ícone'/>
        </Grid.Column>
      <Grid.Column style={{position: 'absolute'}}>
        <div className='skills'>
   
          <div className='progress' style={{width: percent}} >
          </div>
          <div className='spacer' style={{width: spacer}}>
          </div>
        </div>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
export default SkillItem