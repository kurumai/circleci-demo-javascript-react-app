import React from 'react';
import PropTypes from 'prop-types';

export default class Layout extends React.Component {
    render() {

      return ( 
        <div>
          { this.props.children }
        </div>
      );
    }
  }

  Layout.propTypes = {
    children: PropTypes.object
  };