import React from 'react';

class Header extends React.Component {
  render() {
		return <header className="header-area">
      <a
         onClick={this.toggleMenu.bind(this)}
         className="hide--desktop"
      >
        <i className="icon-bars"></i>
      </a>

    </header>
  }

  toggleMenu(e){
    e.preventDefault();
    this.props.toggleMenu();
  }
}


export default Header


