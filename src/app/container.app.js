import AppElement from './component.app';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { Map } from 'immutable';
//import * as nameActions from '../../modules/name/actions.name'

const mapStateToProps = state => {
  return {
    // name: state.get("name"),
  }
}

const mapDispatchToProps = ( dispatch, state ) => {
  return {
    /* doAction: payload => {
      dispatch(nameActions.DoAction(payload))
    },*/
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(VendorDesktopAppElement))



