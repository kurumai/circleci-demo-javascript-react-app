import React from 'react';
import PropTypes from 'prop-types';

export default class Container extends React.Component {
    render() {
      return (
        <div className="container">
          { this.props.children }
        </div>
      );
    }
  }

Container.propTypes = {
  children: PropTypes.object
};