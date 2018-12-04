import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup} from 'reactstrap';

export class TextInputGroup extends React.PureComponent {
  render () {
    return (
      <FormGroup>
        <label htmlFor="login-form_name" className="color--light-blue">{this.props.label}</label>
        <div className="input-group input-group--password">
          <input
            onChange={this.props.onChange}
            value={this.props.value}
            type={this.props.type}
            placeholder={this.props.placeholder}
            className="form-control"/>
          {this.props.groupRender}
        </div>
      </FormGroup>
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
