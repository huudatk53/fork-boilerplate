import React from 'react';
import { Badge } from '@@/fork-ui/src/components/core';

import Wrapper from '@@/.guide/shared/Wrapper';
import FancyBox from '@@/.guide/shared/FancyBox';

const Demo = () => {
  return (
    <Wrapper span="2rem">
      <Badge
        count={7}
        color="#0089e4"
        className="mr-5"
      >
        <FancyBox size="50px" />
      </Badge>
      <Badge
        count={21}
        color="blueviolet"
        className="mr-5"
      >
        <FancyBox size="50px" />
      </Badge>
      <Badge
        count={176}
        color="purple"
        className="mr-5"
      >
        <FancyBox size="50px" />
      </Badge>
      <Badge count={999} color="#4caf50">
        <FancyBox size="50px" />
      </Badge>
    </Wrapper>
  );
};

export default Demo;
