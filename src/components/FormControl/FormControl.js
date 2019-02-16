import React, { Component } from 'react';

import './FormControl.css';

class FormControl extends Component {
  static defaultProps = {
    autoComplete: 'off'
  }

  render() {
    const {
      id,
      name,
      labelText,
      onChange,
      textarea,
      value,
      ...props
    } = this.props;

    const FormElement = textarea ? 'textarea' : 'input';

    return (
      <div className="form__control">
        <label htmlFor={id}>
          {labelText}
        </label>

        <FormElement
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
    );
  }
}

export default FormControl;
