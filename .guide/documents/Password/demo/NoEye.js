import React from 'react';
import { Password } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Password
      noEye
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;
