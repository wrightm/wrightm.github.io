import React from 'react';

import './TimeLine.css';

const TimeLine = props => {
  return (
    <div className="TimeLine">
      <div className="TimeLine-event">
        <div className="TimeLine-info">
          <div className="TimeLine-date">2009</div>
        </div>
        <span>Graduated Math & Physics</span>
      </div>

      <div className="TimeLine-event">
        <div className="TimeLine-info">
          <div className="TimeLine-date">2009</div>
        </div>
        <span>Started PhD Physics</span>
      </div>

      <div className="TimeLine-event">
        <div className="TimeLine-info">
          <div className="TimeLine-date">2010</div>
        </div>
        <span>Worked at CERN</span>
      </div>

      <div className="TimeLine-event">
        <div className="TimeLine-info">
          <div className="TimeLine-date">2012</div>
        </div>
        <span>Helped find the Higgs Boson</span>
      </div>

      <div className="TimeLine-event">
        <div className="TimeLine-info">
          <div className="TimeLine-date">2014</div>
        </div>
        <span>Awarded PhD in Particle Physics</span>
      </div>

      <div className="TimeLine-event">
        <div className="TimeLine-info">
          <div className="TimeLine-date">2014</div>
        </div>
        <span>Worked at JP Morgan</span>
      </div>

      <div className="TimeLine-event">
        <div className="TimeLine-info">
          <div className="TimeLine-date">2015</div>
        </div>
        <span>Worked at FanDuel</span>
      </div>

      <div className="TimeLine-event">
        <div className="TimeLine-info">
          <div className="TimeLine-date">2017</div>
        </div>
        <span>Contract Software Engineer</span>
      </div>
    </div>
  );
};
export default TimeLine;
