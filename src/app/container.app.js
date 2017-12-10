import AppElement from './component.app';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import { Actions as layoutActions } from 'layoutSpaCore'
import { Actions as routerActions } from 'routerSpaCore'

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
    openModalTo: payload => {
      dispatch(modalActions.Open(payload))
    },
    closeModal: payload => {
      dispatch(modalActions.Close(payload))
    },

    toggleMenu: payload => {
      dispatch(layoutActions.ToggleMenu(payload))
    },
    showMenu: payload => {
      dispatch(layoutActions.ShowMenu(payload))
    },
    hideMenu: payload => {
      dispatch(layoutActions.HideMenu(payload))
    },

    rendering: payload => {
      dispatch(routerActions.Render(payload))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppElement)
