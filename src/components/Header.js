import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderLinks = () => {
    if (this.props.authenticated) {
      return (
        <Fragment>
          <Link to="/feature">Feature</Link>
          <Link to="/signout">Sign Out</Link>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </Fragment>
      );
    }
  }

  render() {
    return (
      <div>
        <Link to="/">Redux Auth</Link>
        {this.renderLinks()}
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { authenticated } }) => ({
  authenticated
});

export default connect(mapStateToProps)(Header);
