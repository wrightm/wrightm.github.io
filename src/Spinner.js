import React from 'react';
import { RingLoader } from 'react-spinners';
import classNames from 'classnames';

import './Spinner.css';

const spinner = props => {
  return (
    <div
      className={classNames('Spinner', {
        [props.className]: !!props.className
      })}
    >
      <RingLoader color={'#2c3e50'} loading={props.loading} />
    </div>
  );
};

export default spinner;
