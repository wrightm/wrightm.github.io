import React from 'react';
import classNames from 'classnames';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  FormFeedback
} from 'reactstrap';
import { get, forOwn } from 'lodash';

import SEO from './SEO';

import './Contact.css';

import macbook from './images/macbook.png';

class Contact extends React.Component {
  static NOT_DEFINED = 'NOT_DEFINED';

  constructor(props) {
    super(props);
    this.validateSubject = this.validateSubject.bind(this);
    this.setSubject = this.setSubject.bind(this);
    this.validateMessage = this.validateMessage.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.emailTemplate = this.emailTemplate.bind(this);
    this.validate = this.validate.bind(this);
    this.setValue = this.setValue.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
    this.state = {
      form: {
        subject: {
          value: '',
          isValid: Contact.NOT_DEFINED
        },
        message: {
          value: '',
          isValid: Contact.NOT_DEFINED
        },
        isValid: false
      }
    };
  }

  emailTemplate() {
    return `mailto:wright1michael@gmail.com?subject=${
      this.state.form.subject.value
    }&&body=${this.state.form.message.value}`;
  }

  validate(key, isValid) {
    const formKeyValue = get(this.state.form, key + '.value');
    this.setState({
      form: {
        ...this.state.form,
        [key]: {
          value: formKeyValue,
          isValid: isValid
        },
        isValid: this.isFormValid(key, isValid)
      }
    });
  }

  setValue(key, value) {
    this.setState({
      form: {
        ...this.state.form,
        [key]: {
          value,
          isValid: get(this.state.form, key + '.isValid')
        }
      }
    });
  }

  validateSubject(event) {
    this.validate('subject', !!event.target.value);
  }

  setSubject(event) {
    this.setValue('subject', event.target.value);
  }

  validateMessage(event) {
    this.validate('message', !!event.target.value);
  }

  setMessage(event) {
    this.setValue('message', event.target.value);
  }

  isFormValid(validatedKey, isValidatedKeyValid) {
    let valid = true;
    forOwn(this.state.form, (value, key) => {
      if (key === 'isValid') {
        return;
      }
      if (validatedKey === key) {
        valid = valid & isValidatedKeyValid;
      } else {
        valid = valid & get(value, 'isValid');
      }
    });
    return valid;
  }

  render() {
    const sendEmailButtonClass = classNames(
      'Contact-button btn btn-secondary',
      { 'Contact-button-not-active': !this.state.form.isValid }
    );

    return (
      <div className="Contact">
        <SEO
          schema="ContactPage"
          title="Contact Me"
          description="Contact Michael Wright directly for software consulting or to hire him."
          contentType="website"
          image="contact"
        />
        <Container>
          <h2 className="active animated fadeInDown">Contact me</h2>
          <Row>
            <Col sm="12">
              <img
                src={macbook}
                className="img-fluid d-none d-xl-block"
                alt="Macbook Contact"
              />
              <div className="Contact-macbook-inner black">
                <Row className="active animated fadeIn">
                  <Col sm="1" className="d-none d-sm-block" />
                  <Col sm="10">
                    <h3 className="d-none d-xl-block">Leave a message</h3>
                    <Form>
                      <FormGroup>
                        <Input
                          valid={
                            this.state.form.subject.isValid ===
                            Contact.NOT_DEFINED
                              ? undefined
                              : this.state.form.subject.isValid
                          }
                          type="text"
                          placeholder="Subject"
                          value={this.state.form.subject.value}
                          onBlur={this.validateSubject}
                          onChange={this.setSubject}
                        />
                        <FormFeedback>Please provide a subject</FormFeedback>
                      </FormGroup>
                      <FormGroup>
                        <Input
                          valid={
                            this.state.form.message.isValid ===
                            Contact.NOT_DEFINED
                              ? undefined
                              : this.state.form.message.isValid
                          }
                          type="textarea"
                          placeholder="Message"
                          value={this.state.form.message.value}
                          onBlur={this.validateMessage}
                          onChange={this.setMessage}
                        />
                        <FormFeedback>Please provide a message</FormFeedback>
                      </FormGroup>
                      <a
                        className={sendEmailButtonClass}
                        href={this.emailTemplate()}
                      >
                        Send Message
                      </a>
                    </Form>
                  </Col>
                  <Col sm="1" className="d-none d-sm-block" />
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
