import {withRouter} from 'react-router'
import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
        <Fragment>
          {children}
        </Fragment>
    )
  }
}

export default withRouter(App)
