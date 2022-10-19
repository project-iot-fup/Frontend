/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Close(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M6.062 15L5 13.938 8.938 10 5 6.062 6.062 5 10 8.938 13.938 5 15 6.062 11.062 10 15 13.938 13.938 15 10 11.062z" />
    </svg>
  );
}

export default Close;
