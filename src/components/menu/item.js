import React from 'react'
import {Menu} from 'semantic-ui-react'

class MenuItem extends React.Component{
  
  render(){
    const {name, activeItem} = this.props
    return(
      <div style={{padding: '10px'}} >
        <Menu.Item style={{width: '0', height:'0', padding: '0'}} icon={activeItem === name ? 'circle': 'circle thin'}  active={activeItem === name} onMouseEnter={() =>this.props.handleEnterText(name)} onMouseLeave={() =>this.props.handleExitText(name)} onClick={() => this.props.handleMenuClick(name)} />
      </div>
    )
  }
}
export default MenuItem