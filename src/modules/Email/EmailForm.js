import React, { Component } from 'react';

import EmailService from './EmailService';
import FormControl from '../../components/FormControl/FormControl';
import { ReactComponent as PaperPlaneSolidIcon } from '../../icons/paper-plane-solid.svg';

import './EmailForm.css';

class EmailForm extends Component {
  state = {
    from: '',
    to: '',
    subject: '',
    message: ''
  }

  setValue(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  sendEmail(event) {
    event.preventDefault();

    try {
      const response = EmailService.sendEmail(this.state);

      if (response) {
        this.clearForm();
      }
    } catch(error) {
      console.error(error);
    }
  }

  clearForm() {
    this.setState({
      from: '',
      to: '',
      subject: '',
      message: ''
    });
  }

  render() {
    const { from, to, subject, message } = this.state;

    return (
      <form className="email__form">
        <FormControl
          id="from"
          name="from"
          labelText="From:"
          onChange={this.setValue.bind(this)}
          value={from}
        />

        <FormControl
          id="to"
          name="to"
          labelText="To:"
          onChange={this.setValue.bind(this)}
          value={to}
        />

        <FormControl
          id="subject"
          name="subject"
          labelText="Subject:"
          onChange={this.setValue.bind(this)}
          value={subject}
        />

        <FormControl
          textarea
          id="message"
          name="message"
          labelText="Message:"
          onChange={this.setValue.bind(this)}
          value={message}
        />

        <div className="form__actions">
          <button
            type="submit"
            className="button__icon"
            onClick={this.sendEmail.bind(this)}
          >
            Send
            <PaperPlaneSolidIcon />
          </button>
        </div>
      </form>
    );
  }
}

export default EmailForm;
