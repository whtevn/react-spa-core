import AppElement from './component.app';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { Map } from 'immutable';
import * as navigationActions from '../modules/navigation/actions.navigation'

const mapStateToProps = state => {
  return {
     navigation: state.get("navigation"),
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
    rendering: payload => {
      dispatch(navigationActions.Render(payload))
    },
    navigateTo: payload => {
      dispatch(navigationActions.NavigateTo(payload))
    },
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AppElement))



