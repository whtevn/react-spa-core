import React from 'react';

class Header extends React.Component {
  render() {
		return <header className="header-area">
      <div className="navigation-control">
        <a
           onClick={this.toggleMenu.bind(this)}
           className="hide--desktop"
        >
          <i className="icon-bars"></i>
        </a>
      </div>

      <div className="user-info">
        User Name
      </div>
    </header>
  }

  toggleMenu(e){
    e.preventDefault();
    this.props.toggleMenu();
  }
}


export default Header


