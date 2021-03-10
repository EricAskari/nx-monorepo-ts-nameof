import React from 'react';

import './my-lib.module.scss';

/* eslint-disable-next-line */
export interface MyLibProps {}

export function MyLib(props: MyLibProps) {
  return (
    <div>
      <h1>Welcome to my-lib!</h1>
    </div>
  );
}

export default MyLib;
