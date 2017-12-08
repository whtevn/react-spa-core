import React from 'react';
import Route from '../route/component.route';
import { panelChanged } from './reducer.panel';

class Panel extends React.Component {
  constructor( { panel, name, navigation, children, exact } ){
    super();
  }

  render() {
console.log(this.foundElement);
    return <div className={this.props.name}>
      { this.foundElement }
    </div>
  }

  componentDidMount(){
    this.changePanel(this.props)
  }
  componentWillReceiveProps(nextProps){
    if(this.props.navigation.getIn(["data", "location"]) != nextProps.navigation.getIn(["data", "location"])) this.changePanel(nextProps)
  }

  changePanel({ panel, name, navigation, children, exact }){
    const params={}
    const location = navigation.getIn(["data", "location"])||"/"
    const allowedChildren = children.filter(c => c.type === Route)
    for(var i = 0; i<allowedChildren.length; i++){
      const child = allowedChildren[i];
      const findParams = new RegExp(/:[^\/]*/, "g")
      const query = child.props.when.replace(findParams, "([^\\/]*)");
      const regx = exact ?
                    new RegExp(`^${query}$`) :
                    new RegExp(`^${query}.*`) ;
      if(location.match(regx)){
        this.foundElement = child;
        break;
      }
    }
    const route = this.foundElement.props.when;

		const current = panel.getIn(["data", name])
		const found = {
      name,
      route,
      params
    }
    if(panelChanged({ current, found })) this.props.rendering(found);
  }
}

export default Panel
