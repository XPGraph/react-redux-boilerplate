import React from 'react';
import PropTypes from 'prop-types';

export class TextInput extends React.PureComponent {
  render () {
    const { label, onChange, value, type, placeholder } = this.props;
    return (
      <div>
        <label htmlFor="login-form_name" className="color--light-blue">
          {label}
        </label>
        <input onChange={onChange} value={value} type={type} placeholder={placeholder} className="form-control" />
      </div>
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
