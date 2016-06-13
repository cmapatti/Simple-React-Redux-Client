import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tick } from '../actions/timer';

import Content from '../components/Content';

class ContentContainer extends Component {

  render() {
    return <Content {...this.props} />;
  }

}

function mapStateToProps(state) {
  const { secondsElapsed } = state;
  return { secondsElapsed };
}

function mapDispatchToProps(dispatch) {
  return {
    tick: () => dispatch(tick()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
