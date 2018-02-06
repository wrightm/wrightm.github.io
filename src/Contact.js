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
import TrackedAction from './TrackedAction';
import { CATEGORY, ACTION, LABEL } from './GAOptions';

import './Contact.css';

import macbook from './images/macbook.png';

class Contact extends React.Component {
  static NOT_DEFINED = 'NOT_DEFINED';

  constructor(props) {
    super(props);
    this.setSubject = this.setSubject.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.emailTemplate = this.emailTemplate.bind(this);
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

  setValue(key, value, isValid) {
    this.setState({
      form: {
        ...this.state.form,
        [key]: {
          value,
          isValid
        },
        isValid: this.isFormValid(key, isValid)
      }
    });
  }

  setSubject(event) {
    this.setValue('subject', event.target.value, !!event.target.value);
  }

  setMessage(event) {
    this.setValue('message', event.target.value, !!event.target.value);
  }

  isFormValid(currentKey, currentKeyIsValid) {
    let isValid = true;
    forOwn(this.state.form, (value, key) => {
      if (key === 'isValid') {
        return;
      }
      if (currentKey === key) {
        isValid = isValid & currentKeyIsValid;
      } else {
        isValid = isValid & get(value, 'isValid');
      }
    });
    return isValid;
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
                          placeholder="Subject: required"
                          value={this.state.form.subject.value}
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
                          placeholder="Message: required"
                          value={this.state.form.message.value}
                          onChange={this.setMessage}
                        />
                        <FormFeedback>Please provide a message</FormFeedback>
                      </FormGroup>
                      <TrackedAction
                        gaCategory={CATEGORY.USER}
                        gaAction={ACTION.CLICK}
                        gaLabel={LABEL.SEND_CONTACT_MESSAGE}
                        className={sendEmailButtonClass}
                        href={this.emailTemplate()}
                        tag="a"
                      >
                        Send Message
                      </TrackedAction>
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

/*<a
    className={sendEmailButtonClass}
    href={this.emailTemplate()}
>
  Send Message
</a>
*/
