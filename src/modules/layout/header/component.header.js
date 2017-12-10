import React from 'react';

class Header extends React.Component {
  render() {
		return <header className="header-area">
        { this.props.children }
    </header>
  }

}


export default Header


