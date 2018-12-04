import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup} from 'reactstrap';

export class TextInput extends React.PureComponent {
  render () {
    return (
      <FormGroup>
        <label htmlFor="login-form_name" className="color--light-blue">{this.props.label}</label>
        <input
          onChange={this.props.onChange}
          value={this.props.value}
          type={this.props.type}
          placeholder={this.props.placeholder}
          className="form-control"/>
      </FormGroup>
    );
  }
}

TextInput.defaultProps = {
  type: 'text',
};

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
};
