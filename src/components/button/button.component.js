import React from 'react';
import PropTypes from 'prop-types';

export class Button extends React.PureComponent {
  render () {
    return (
      <div
        onClick={this.props.onClick}
        className="btn btn-default btn--green m-auto">{this.props.label}</div>
    );
  }
}

Button.defaultProps = {
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
};
