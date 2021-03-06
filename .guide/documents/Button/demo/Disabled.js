import React from 'react';
import styled from 'styled-components';
import { Button } from '@@/fork-ui/src/components/core';
import { Cast } from '@@/fork-ui/src/components/icons';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <Button disabled>BASIC</Button>
      <Button disabled primary>PRIMARY</Button>
      <Button disabled outlined color="green">Green</Button>
      <Button disabled circle icon={<Cast />} />
    </Wrapper>
  );
};

export default Demo;
