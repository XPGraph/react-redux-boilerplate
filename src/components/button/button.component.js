import React from 'react';
import PropTypes from 'prop-types';

export class Button extends React.PureComponent {
  render () {
    const { onClick, label } = this.props;
    return (
      <div onClick={onClick} className="btn btn-default btn--green m-auto">
        {label}
      </div>
    );
  }
}

Button.defaultProps = {};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
};
