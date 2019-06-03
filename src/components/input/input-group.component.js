import React from 'react';
import PropTypes from 'prop-types';

export class TextInputGroup extends React.PureComponent {
  render () {
    const { onChange, placeholder, value, groupRender, type, label } = this.props;

    return (
      <div>
        <label htmlFor="login-form_name" className="color--light-blue">
          {label}
        </label>
        <div className="input-group input-group--password">
          <input onChange={onChange} value={value} type={type} placeholder={placeholder} className="form-control" />
          {groupRender}
        </div>
      </div>
    );
  }
}

TextInputGroup.defaultProps = {
  type: 'text',
};

TextInputGroup.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  groupRender: PropTypes.element,
  type: PropTypes.string,
};
