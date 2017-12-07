import React from 'react';
class Link extends React.Component {
  render() {
    return <a href="#" onClick={this.goto.bind(this)}>{this.props.children}</a>
  }

  goto(e){
    e.preventDefault();
    this.props.navigateTo(this.props.to)
  }
}

export default Link

