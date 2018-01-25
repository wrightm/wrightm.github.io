import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import './Skills.css';

import javaLogo from './images/java.svg';
import springLogo from './images/spring-boot.svg';
import hibernateLogo from './images/hibernate.svg';
import mySQLLogo from './images/mysql.svg';
import postgresLogo from './images/postgresql.svg';
import awsLogo from './images/aws.svg';
import dockerLogo from './images/docker.svg';
import gradleLogo from './images/gradle.svg';
import mavenLogo from './images/maven-logo.svg';
import cucumberLogo from './images/cucumber.svg';
import javascriptLogo from './images/javascript.svg';
import reactLogo from './images/react.svg';
import riotJSLogo from './images/riot-icon.svg';
import angularLogo from './images/angular.svg';
import jqueryLogo from './images/jquery.svg';
import reduxLogo from './images/redux.svg';
import webPackLogo from './images/webpack.svg';
import yarnLogo from './images/yarn.svg';
import bowerLogo from './images/bower.svg';
import htmlLogo from './images/html-5.svg';
import cssLogo from './images/css-3.svg';
import bootstrapLogo from './images/bootstrap.svg';
import pythonLogo from './images/python.svg';
import cplusplusLogo from './images/cplusplus.svg';

const Skills = props => {
  const skills = [
    {
      id: 1,
      name: 'Java',
      image: javaLogo,
      alt: 'Java Icon'
    },
    {
      id: 2,
      name: 'Spring',
      image: springLogo,
      alt: 'Spring Boot Icon'
    },
    {
      id: 3,
      name: 'Hibernate',
      image: hibernateLogo,
      alt: 'Hibernate Icon'
    },
    {
      id: 4,
      name: 'MySQL',
      image: mySQLLogo,
      alt: 'MySQL Icon'
    },
    {
      id: 5,
      name: 'Postgres',
      image: postgresLogo,
      alt: 'Postgres Icon'
    },
    {
      id: 6,
      name: 'AWS',
      image: awsLogo,
      alt: 'AWS Icon'
    },
    {
      id: 7,
      name: 'Docker',
      image: dockerLogo,
      alt: 'Docker Icon'
    },
    {
      id: 8,
      name: 'Gradle',
      image: gradleLogo,
      alt: 'Gradle Icon'
    },
    {
      id: 9,
      name: 'Maven',
      image: mavenLogo,
      alt: 'Maven Icon'
    },
    {
      id: 10,
      name: 'Cucumber',
      image: cucumberLogo,
      alt: 'Cucumber Icon'
    },
    {
      id: 11,
      name: 'Javascript',
      image: javascriptLogo,
      alt: 'Javascript Icon'
    },
    {
      id: 12,
      name: 'React',
      image: reactLogo,
      alt: 'React Icon'
    },
    {
      id: 13,
      name: 'RiotJS',
      image: riotJSLogo,
      alt: 'RiotJS Icon'
    },
    {
      id: 14,
      name: 'AngularJS',
      image: angularLogo,
      alt: 'Angular Icon'
    },
    {
      id: 15,
      name: 'JQuery',
      image: jqueryLogo,
      alt: 'JQuery Icon'
    },
    {
      id: 16,
      name: 'Redux',
      image: reduxLogo,
      alt: 'Redux Icon'
    },
    {
      id: 17,
      name: 'Webpack',
      image: webPackLogo,
      alt: 'Webpack Icon'
    },
    {
      id: 18,
      name: 'Yarn',
      image: yarnLogo,
      alt: 'Yarn Icon'
    },
    {
      id: 19,
      name: 'Bower',
      image: bowerLogo,
      alt: 'Bower Icon'
    },
    {
      id: 20,
      name: 'HTML',
      image: htmlLogo,
      alt: 'HTML Logo'
    },
    {
      id: 21,
      name: 'CSS',
      image: cssLogo,
      alt: 'CSS Logo'
    },
    {
      id: 22,
      name: 'Bootstrap',
      image: bootstrapLogo,
      alt: 'Bootstrap Logo'
    },
    {
      id: 23,
      name: 'Python',
      image: pythonLogo,
      alt: 'Python Icon'
    },
    {
      id: 24,
      name: 'C++',
      image: cplusplusLogo,
      alt: 'C++ Icon'
    }
  ];

  const skillColumns = skills.map(skill => {
    return (
      <Col className="Skill" key={skill.id} md="4">
        <img className="Skill-image" src={skill.image} alt={skill.alt} />
        <span className="Skill-name">{skill.name}</span>
      </Col>
    );
  });

  return (
    <section className="Skills">
      <Container>
        <Row>
          <Col md="12" className="Skills-heading">
            <h2>Skills</h2>
            <hr className="Skills-underline" />
          </Col>
        </Row>
        <Row>{skillColumns}</Row>
      </Container>
    </section>
  );
};

export default Skills;
