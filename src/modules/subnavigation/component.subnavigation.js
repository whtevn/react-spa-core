import React from 'react';
class Link extends React.Component {
  render() {
    return <ul className="link-list">
        {
          this.props.children.map(
          (child, key) =>
            <li key={key} className="link-list-element">
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

export default Link


