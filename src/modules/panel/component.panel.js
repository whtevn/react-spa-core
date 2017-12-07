import React from 'react';
class Panel extends React.Component {
  render() {
    const foundElement=this.props.children[0]
    // search this.props.children
    // look at child.props.when
    // compare against this.props.navigation.getIn(["data", "location"])
    return <div className={this.props.name}>
      <foundElement.props.render />
    </div>
  }
}

export default Panel
