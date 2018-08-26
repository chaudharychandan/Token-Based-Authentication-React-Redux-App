import React, { Component } from 'react';
import requireAuth from 'components/requireAuth';

class Feature extends Component {
  render() {
    return (
      <div>This is in feature component</div>
    );
  }
};

export default requireAuth(Feature);
