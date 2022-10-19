/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Missed(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={48} width={48} {...props}>
      <path d="M19.05 37.1l-2.15-2.15 5-4.95-5-4.95 2.15-2.15 4.95 5 4.95-5 2.15 2.15-5 4.95 5 4.95-2.15 2.15-4.95-5zM9 44q-1.2 0-2.1-.9Q6 42.2 6 41V10q0-1.2.9-2.1Q7.8 7 9 7h3.25V4h3.25v3h17V4h3.25v3H39q1.2 0 2.1.9.9.9.9 2.1v31q0 1.2-.9 2.1-.9.9-2.1.9zm0-3h30V19.5H9V41zm0-24.5h30V10H9zm0 0V10v6.5z" />
    </svg>
  );
}

export default Missed;
