import React, { Component } from 'react';

import { ReactComponent as PaperPlaneSolidIcon } from './icons/paper-plane-solid.svg';

import './EmailForm.css';

class EmailForm extends Component {
  state = {
    from: '',
    to: '',
    subject: '',
    message: ''
  }

  render() {
    const { from, to, subject, message } = this.state;

    return (
      <div className="email__form">
        <div className="form__control">
          <label htmlFor="from">From:</label>
          <input id="from" value={from} />
        </div>

        <div className="form__control">
          <label htmlFor="to">To:</label>
          <input id="to" value={to} />
        </div>

        <div className="form__control">
          <label htmlFor="subject">Subject:</label>
          <input id="subject" value={subject} />
        </div>

        <div className="form__control">
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} />
        </div>

        <div className="form__actions">
          <button className="button__icon">
            <span>Send</span>
            <PaperPlaneSolidIcon />
          </button>
        </div>
      </div>
    );
  }
}

export default EmailForm;
