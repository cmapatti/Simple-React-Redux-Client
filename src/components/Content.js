import React, { Component, PropTypes } from 'react';

const propTypes = {
  tick: PropTypes.func.isRequired,
  secondsElapsed: PropTypes.number,
};

class Content extends Component {

  constructor(props) {
    super(props);

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    const { tick } = this.props;
    tick();
  }

  render() {
    const { secondsElapsed } = this.props;

    return (
      <div>
        {secondsElapsed}
      </div>
    );
  }

}

Content.propTypes = propTypes;

export default Content;
