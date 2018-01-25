import React from 'react';
import Helmet from 'react-helmet';
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

import './Contact.css';

import macbook from './images/macbook.png';

class Contact extends React.Component {
  static emailTemplate = 'mailto:wright1michael@gmail.com?subject=FromMyWebsite&&body=Test';

  constructor(props) {
    super(props);
    this.validateFirstName = this.validateFirstName.bind(this);
    this.setFirstName = this.setFirstName.bind(this);
    this.validateLastName = this.validateLastName.bind(this);
    this.setLastName = this.setLastName.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.validateMessage = this.validateMessage.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.validate = this.validate.bind(this);
    this.setValue = this.setValue.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
    this.state = {
      form: {
        firstname: {
          value: undefined,
          isValid: undefined
        },
        lastname: {
          value: undefined,
          isValid: undefined
        },
        email: {
          value: undefined,
          isValid: undefined
        },
        message: {
          value: undefined,
          isValid: undefined
        },
        isValid: false
      }
    };
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

  validateFirstName(event) {
    this.validate('firstname', !!event.target.value);
  }

  setFirstName(event) {
    this.setValue('firstname', event.target.value);
  }

  validateLastName(event) {
    this.validate('lastname', !!event.target.value);
  }

  setLastName(event) {
    this.setValue('lastname', event.target.value);
  }

  validateEmail(event) {
    const email = event.target.value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validEmail = re.test(email.toLowerCase());
    this.validate('email', validEmail);
  }

  setEmail(event) {
    this.setValue('email', event.target.value);
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

  sendEmail(event) {
    event.preventDefault();
  }

  render() {
    const sendEmailButtonClass = classNames(
      'Contact-button btn btn-secondary',
      { 'Contact-button-not-active': !this.state.form.isValid }
    );

    return (
      <div className="Contact">
        <Helmet title="Contact" />
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
                          valid={this.state.form.firstname.isValid}
                          type="text"
                          placeholder="First Name"
                          value={this.state.form.firstname.value}
                          onBlur={this.validateFirstName}
                          onChange={this.setFirstName}
                        />
                        <FormFeedback>
                          Please provide your first name
                        </FormFeedback>
                      </FormGroup>
                      <FormGroup>
                        <Input
                          valid={this.state.form.lastname.isValid}
                          type="text"
                          placeholder="Last Name"
                          value={this.state.form.lastname.value}
                          onBlur={this.validateLastName}
                          onChange={this.setLastName}
                        />
                        <FormFeedback>
                          Please provide your last name
                        </FormFeedback>
                      </FormGroup>
                      <FormGroup>
                        <Input
                          valid={this.state.form.email.isValid}
                          type="text"
                          placeholder="Email"
                          value={this.state.form.email.value}
                          onBlur={this.validateEmail}
                          onChange={this.setEmail}
                        />
                        <FormFeedback>Please provide your email</FormFeedback>
                      </FormGroup>
                      <FormGroup>
                        <Input
                          valid={this.state.form.message.isValid}
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
                        href={Contact.emailTemplate}
                        onClick={this.sendEmail}
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
