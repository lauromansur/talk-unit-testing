import EmailServiceResponse from './__mocks__/EmailServiceResponse.json';

class EmailService {
  sendEmail(formData) {
    try {
      return EmailServiceResponse;
    } catch(error) {
      console.error(error);
      return false;
    }
  }
}

export default new EmailService();
