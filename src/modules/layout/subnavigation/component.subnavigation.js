import React from 'react';
class SubNavigation extends React.Component {
  render() {
    return <ul className="link-list">
        {
          this.props.children.map(
          (child, key) =>
            <li key={key} className={(child.props.to&&this.props.navigation.getIn(["data", "location"]).match(child.props.to)? "is-selected" : "")+" link-list-element"}>
              {
                React.cloneElement(child, {
                 ...this.props,
                 ...child.props,
                })
               }
            </li>
          )
        }
      </ul>
  }
}

export default SubNavigation


