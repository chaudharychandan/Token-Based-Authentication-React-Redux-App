import React, { Component } from 'react';
import { connect } from 'react-redux';

class Welcome extends Component {
  render() {
    if (this.props.authenticated) {
      return <h3>Welcome to React App!</h3>
    } else {
      return <h3>Welcome! Sign up or sign in!</h3>
    }
  }
}

const mapStateToProps = ({ auth: { authenticated } }) => ({
  authenticated
});

export default connect(mapStateToProps)(Welcome);