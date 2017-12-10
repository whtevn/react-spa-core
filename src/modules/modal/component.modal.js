import React from 'react';

import { Panel, Route, Link } from 'routerSpaCore';

class Modal extends React.Component {
  constructor(){
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  render(){
    return <Panel { ...this.props }
				 panelName="modal"
				 navigation={ this.props.modal }
				 ignoreWhen={ this.props.modal.getIn(["state", "hidden"]) } >
        <Route when="/modal/decline" exact >
					<Link
						 navigation={this.props.modal}
						 navigateWith={this.props.closeModal}>

							Close
					</Link>
					no thanks
        </Route>
        <Route when="/modal/accept" exact >
					sounds good
						<Link
							 navigation={this.props.modal}
							 navigateWith={this.props.closeModal}>

								Close
						</Link>
        </Route>
      </Panel>
  }

  hideMenu(e){
    e.preventDefault();
    this.props.hideMenu();
  }

  handleKeyPress(e){
    if(e.keyCode === 27){
      if(!this.props.modal.getIn(["state", "hidden"])) this.props.closeModal();
    }else{
      return true
    }
  }

  componentDidMount(){
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyPress);
  }
}

export default Modal

