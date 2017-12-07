import React from 'react';
import Link from '../modules/link/component.link';
import Header from '../modules/header/component.header';
import Footer from '../modules/footer/component.footer';
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

      <Panel { ...this.props } name="activity-area" >
        <Route when="/page/one" exact >
					Page 1
        </Route>
        <Route render={ MyElement } when="/page/:number" exact />
        <Route render={ MyElement } when="/page/three/:number" exact />
      </Panel>

      <Panel { ...this.props } name="information-panel" >
        <Route render={ MyElement } when="/page/three" />
        <Route render={ MyElement } when="/page" />
      </Panel>

      <Footer { ...this.props } />
		</div>
  }

  toggleMenu(e){
    e.preventDefault();
    this.props.toggleMenu();
  }
}

class MyElement extends React.Component {
  render() {
		return <div className="my-element"></div>
  }
}

export default AppContainerElement
