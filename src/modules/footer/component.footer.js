import React from 'react';

class Footer extends React.Component {
  render() {
		return <footer className="footer-area">
        { this.props.children }
    </footer>
  }
}

export default Footer



