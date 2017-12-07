import React from 'react';
import SubNavigation from '../subnavigation/component.subnavigation';

class Navigation extends React.Component {
  render() {
    const hideMenu = this.props.navigation.getIn(["state", "hidden"])?"hide--tablet hide--mobile":"";
		return <nav className={"navigation-panel "+(hideMenu)}>
      <a
         onClick={this.hideMenu.bind(this)}
         className="hide--desktop"
      >
        <i className="icon-times"></i>
      </a>
      <SubNavigation>
        {
          this.props.children.map( (child, key) =>
             React.cloneElement(child, { ...this.props, ...child.props, key})
          )
        }
      </SubNavigation>
    </nav>
  }

  hideMenu(e){
    e.preventDefault();
    this.props.hideMenu();
  }
}

export default Navigation

