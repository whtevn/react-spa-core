import React from 'react';
import Link from '../modules/link/component.link';
import Header from '../modules/header/component.header';
import Footer from '../modules/footer/component.footer';
import Modal from '../modules/modal/component.modal';
import Navigation from '../modules/navigation/component.navigation';
import SubNavigation from '../modules/subnavigation/component.subnavigation';
import Panel from '../modules/panel/component.panel';
import Route from '../modules/route/component.route';

class AppContainerElement extends React.Component {
  render() {
		return <div className="app-container">

      <Header { ...this.props } >
        <div className="navigation-control">
          <a
             onClick={this.toggleMenu.bind(this)}
             className="hide--desktop"
          >
            <i className="icon-bars"></i>
          </a>
        </div>

        <div className="user-info">
          User Name
        </div>
      </Header>

      <Navigation { ...this.props } >
        <Link to="/page/one">One</Link>
        <Link to="/page/two">Two</Link>
        <SubNavigation title="Three" >
          <Link to="/page/three/a">Three A</Link>
          <Link to="/page/three/b">Three B</Link>
        </SubNavigation>
      </Navigation>

      <Modal { ...this.props } />

      <Panel { ...this.props } panelName="activity-area" >
        <Route when="/page/one" exact >
					Page 1
        </Route>
        <Route render={ PageNumSub } when="/page/:number/:sub" exact />
        <Route render={ PageNum } when="/page/:number" exact />
        <Route when="/">
          default
        </Route>
      </Panel>

      <Panel { ...this.props } panelName="information-panel" >
        <Route render={ PageThree } when="/page/three" />
        <Route render={ Page } when="/page" />
        <Route when="/">
          default
        </Route>
      </Panel>

      <Footer { ...this.props } />
		</div>
  }

  toggleMenu(e){
    e.preventDefault();
    this.props.toggleMenu();
  }
}

class Page extends React.Component {
  render() {
console.log(this.props.modal.toJS());
console.log(this.props.panel.toJS());
		return <div className="my-element">
						Page
						<br /> { this.props.panelName }
						<br /> { JSON.stringify(this.props.params) }
<br />
						<Link
							 to="/modal/decline"
							 navigation={this.props.modal}
							 navigateWith={this.props.openModalTo}>

								Decline Modal Open
						</Link>
<br />

						<Link
							 to="/modal/accept"
							 navigation={this.props.modal}
							 navigateWith={this.props.openModalTo}>

								Accept Modal Open
						</Link>
					</div>
  }
}
class PageNum extends React.Component {
  render() {
		return <div className="my-element">
			PageNum Awesome Element!
<br /> { this.props.panelName }
<br /> { JSON.stringify(this.props.params) }
		</div>
  }
}
class PageNumSub extends React.Component {
  render() {
		return <div className="my-element">
PageNumSub
<br /> { this.props.panelName }
<br /> { JSON.stringify(this.props.params) }
</div>
  }
}
class PageThree extends React.Component {
  render() {
		return <div className="my-element">
						PageThree Awesome Element!
<br /> { this.props.panelName }
<br /> { JSON.stringify(this.props.params) }
					</div>
  }
}
class MyElement extends React.Component {
  render() {
		return <div className="my-element">
						My Awesome Element!
<br /> { this.props.panelName }
<br /> { JSON.stringify(this.props.params) }
					</div>
  }
}

export default AppContainerElement
