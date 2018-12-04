import React from 'react';
import PropTypes from 'prop-types';

export const DefaultLayout = ({children}) =>
  <div className="layout-body">
    <div className="section section-default">
      <div className="container-fluid">
        {children}
      </div>
    </div>
  </div>;

DefaultLayout.defaultProps = {

};

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
