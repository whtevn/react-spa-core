import React from 'react';
import SubNavigation from '../subnavigation/component.subnavigation';

class Navigation extends React.Component {
  constructor(){
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  render() {
    const hideMenu = this.props.navigation.getIn(["state", "hidden"])?"hide--tablet hide--mobile":"";
		return <nav className={"navigation-panel "+(hideMenu)}>
      <a
         onClick={this.hideMenu.bind(this)}
         className="hide--desktop"
      >
        <i className="icon-times"></i>
      </a>
      <SubNavigation { ...this.props } />
    </nav>
  }

  hideMenu(e){
    e.preventDefault();
    this.props.hideMenu();
  }

  handleKeyPress(e){
    if(e.keyCode === 27){
      if(!this.props.navigation.getIn(["state", "hidden"])) this.props.hideMenu();
    }else{
      return true
    }
  }

  componentDidMount(){
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyPress);
  }
}

export default Navigation

