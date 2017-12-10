import AppElement from './component.app';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { Map } from 'immutable';

import * as navigationActions from '../modules/layout/actions'

import * as panelActions from '../modules/router/actions'

import * as modalActions from '../modules/modal/actions.modal'

const mapStateToProps = state => {
  return {
     navigation: state.get("navigation"),
     panel: state.get("panel"),
     modal: state.get("modal"),
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
    openModalTo: payload => {
      dispatch(modalActions.Open(payload))
    },
    closeModal: payload => {
      dispatch(modalActions.Close(payload))
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



