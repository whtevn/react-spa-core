import React from 'react';
import { panelChanged } from './reducer.panel';

class Panel extends React.Component {
  render() {
    let foundElement
    const name = this.props.name;
    const regx = this.props.exact ?
                  new RegExp(``) :
                  new RegExp(``) ;


    // load an object with the values based on
    // the regex of the route and the current location
    const params={}

    // search this.props.children
    // look at child.props.when
    // compare against this.props.navigation.getIn(["data", "location"])
    foundElement=this.props.children[0]
    const route = foundElement.props.when;

    const displayElement = foundElement.props.render ?
    <foundElement.props.render />:foundElement.props.children


		const current = this.props.panel.getIn(["data", this.props.name])
		const found = {
      name,
      route,
      params
    }
    // dispatch what we have found and where we are putting it
    if(panelChanged({ current, found })) this.props.rendering(found)

    return <div className={this.props.name}>
      {displayElement}
    </div>
  }

  shouldComponentUpdate(nextProps, nextState){
    // do all of the finding in here
    // return false if the location is unchanged
		return true;
  }
}

export default Panel
