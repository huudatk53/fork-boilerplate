import React, { useCallback, useRef } from 'react';
import { InputNumber } from '@/rc-neumorphism/core';

const Demo = () => {
  const ref = useRef();

  const onChange = useCallback(() => {
    console.log(ref.current);
  }, [ref]);

  return (
    <InputNumber
      ref={ref}
      placeholder="The placeholder"
      onChange={onChange}
    />
  );
};

export default Demo;
Demo.header = 'With Ref';
Demo.href = 'inputnumber-with-ref';

Demo.code = `import React, { useCallback, useRef } from 'react';
import { InputNumber } from '@/rc-neumorphism/core';

const Demo = () => {
  const ref = useRef();

  const onChange = useCallback(() => {
    console.log(ref.current);
  }, [ref]);

  return (
    <InputNumber
      ref={ref}
      placeholder="The placeholder"
      onChange={onChange}
    />
  );
};

export default Demo;
`;