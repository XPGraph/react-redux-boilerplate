import React from 'react';
import PropTypes from 'prop-types';

export const LoginLayout = ({children}) =>
  <div className="layout-login">
    <div className="layout">
      <div className="layout-body">
        <div className="section section-login">
          <div className="container-fluid">
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>;

LoginLayout.defaultProps = {

};

LoginLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
