import React from 'react';
import Navigation from '../modules/navigation/component.navigation';
import Header from '../modules/header/component.header';
import Footer from '../modules/footer/component.footer';

class AppContainerElement extends React.Component {
  render() {
		return <div className="app-container">

      <Header { ...this.props } />

      <Navigation { ...this.props } />

			<section className="activity-area">
			</section>

			<aside className="information-panel">
			</aside>

      <Footer { ...this.props } />
		</div>
  }
}

export default AppContainerElement
