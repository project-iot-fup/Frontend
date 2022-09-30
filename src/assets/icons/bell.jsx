import * as React from 'react';

function Bell(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M15.137 3.945a2.103 2.103 0 01-1.041-1.82v-.003C14.097.95 13.158 0 12 0S9.903.95 9.903 2.122v.003a2.1 2.1 0 01-1.041 1.82C4.195 6.657 6.877 15.66 2 17.251V19h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zM12 1a1.001 1.001 0 010 2 1 1 0 010-2zm3 20c0 1.598-1.392 3-2.971 3S9 22.598 9 21h6z" />
    </svg>
  );
}

export default Bell;
