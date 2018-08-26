import React, { Component } from 'react';
import requireAuth from 'components/requireAuth';

class Feature extends Component {
  render() {
    return (
      <h3>This is in feature component</h3>
    );
  }
};

export default requireAuth(Feature);
