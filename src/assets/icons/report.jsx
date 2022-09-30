/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Report(props) {
  return (
    <svg
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 4c0-.478-.379-1-1-1H4c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-3 11.25a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h4.5a.75.75 0 01.75.75zm-11.772-.537a.682.682 0 11.91-1.018l.746.665 1.66-1.815a.683.683 0 011.009.92l-2.116 2.313a.68.68 0 01-.959.049zM18 12.002a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h4.5a.75.75 0 01.75.75zM6.228 10.389v.001a.681.681 0 11.91-1.018l.746.664 1.66-1.815a.683.683 0 011.009.921l-2.116 2.313a.682.682 0 01-.959.048zM18 8.75a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h4.5a.75.75 0 01.75.75z"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default Report;
