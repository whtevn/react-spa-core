import React from 'react';
class Link extends React.Component {
  render() {
    const current = this.props.navigation.getIn(["data", "location"]).match(this.props.to)
    return <a href="#" className={current?"is-selected":""}  onClick={this.goto.bind(this)}>{this.props.children}</a>
  }

  goto(e){
    e.preventDefault();
    this.props.navigateTo(this.props.to)
  }
}

export default Link

