import * as React from 'react';

function User(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22a9.983 9.983 0 01-7.749-3.69c.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945C6.356 8.299 8.612 5 12 5c3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241A9.982 9.982 0 0112 22z" />
    </svg>
  );
}

export default User;
