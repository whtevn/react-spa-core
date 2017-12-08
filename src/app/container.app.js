import AppElement from './component.app';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { Map } from 'immutable';
import * as navigationActions from '../modules/navigation/actions.navigation'
import * as panelActions from '../modules/panel/actions.panel'

const mapStateToProps = state => {
  return {
     navigation: state.get("navigation"),
     panel: state.get("panel"),
  }
}

const mapDispatchToProps = ( dispatch, state ) => {
  return {
    toggleMenu: payload => {
      dispatch(navigationActions.ToggleMenu(payload))
    },
    showMenu: payload => {
      dispatch(navigationActions.ShowMenu(payload))
    },
    hideMenu: payload => {
      dispatch(navigationActions.HideMenu(payload))
    },
    navigateTo: payload => {
      dispatch(navigationActions.NavigateTo(payload))
    },
    rendering: payload => {
      dispatch(panelActions.Render(payload))
    },
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AppElement))



