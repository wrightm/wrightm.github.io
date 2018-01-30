import React from 'react';

import { Container, Row } from 'reactstrap';

import Publication from './Publication';
import SEO from './SEO';

import './Publications.css';

import phd from './files/phd.pdf';
import smh_bquarks from './files/SMH-bquark.pdf';
import atlas_site_status_board from './files/atlas-site-status-board.pdf';
import smh_4_9_7TeV from './files/smh_4_9_7TeV.pdf';
import hplus_tau_lep from './files/HPlusTauLep.pdf';

class Publications extends React.Component {
  static publications = [
    {
      id: 1,
      file: phd,
      title: 'PhD Thesis',
      open: true
    },
    {
      id: 2,
      file: smh_bquarks,
      title:
        'Search for the Standard Model Higgs boson produced in association with a vector boson and decaying to a b-quark pair with the ATLAS detector'
    },
    {
      id: 3,
      file: atlas_site_status_board,
      title: 'Automating ATLAS Computing Operations using the Site Status Board'
    },
    {
      id: 4,
      file: smh_4_9_7TeV,
      title:
        'Combined search for the Standard Model Higgs boson with the ATLAS detector at the LHC using 4.6-4.9 fb-1 of pp collision data at √s = 7 TeV collected in 2011'
    },
    {
      id: 5,
      file: hplus_tau_lep,
      title:
        'Search for a charged Higgs boson H+ decaying via to tau(lep)+nu in ttbar events with one or two light leptons in the final state using 1.03/fb of pp collision data recorded at sqrt(s) = 7 TeV with the ATLAS detector'
    }
  ];

  constructor(props) {
    super(props);
    this.createPublications = this.createPublications.bind(this);
  }

  createPublications() {
    return Publications.publications.map(publication => {
      return (
        <Row key={publication.id}>
          <Publication
            open={publication.open}
            key={publication.id}
            file={publication.file}
            title={publication.title}
          />
        </Row>
      );
    });
  }

  render() {
    const publications = this.createPublications();
    return (
      <div className="Publications">
        <SEO
          schema="Article"
          title="Publications"
          description="Michael Wright's publications, including his PhD in Particle Physics"
          contentType="website"
          image="publications"
        />
        <Container>
          <h2>Publications</h2>
          <hr className="Publications-underline" />
          {publications}
        </Container>
      </div>
    );
  }
}

export default Publications;
