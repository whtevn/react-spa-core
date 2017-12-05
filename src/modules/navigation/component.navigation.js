import React from 'react';

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
    </nav>
  }

  hideMenu(e){
    e.preventDefault();
    this.props.hideMenu();
  }
}

export default Navigation

