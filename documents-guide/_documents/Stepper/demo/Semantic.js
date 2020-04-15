import React from 'react';
import { Stepper } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Stepper className="mb-10">
        <Stepper.Step
          title="Step One"
          completed
        >
          Description One
        </Stepper.Step>
        <Stepper.Step title="Step Two">
          Description Two
        </Stepper.Step>
        <Stepper.Step
          title="Step Three"
          canceled
        >
          Description Three
        </Stepper.Step>
        <Stepper.Step
          title="Step Four"
          processing
        >
          Description Four
        </Stepper.Step>
      </Stepper>
    </div>
  );
};

export default Demo;
Demo.header = 'Semantic';
Demo.href = 'stepper-semantic';

Demo.code = `import React from 'react';
import { Stepper } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Stepper className="mb-10">
        <Stepper.Step
          title="Step One"
          completed
        >
          Description One
        </Stepper.Step>
        <Stepper.Step title="Step Two">
          Description Two
        </Stepper.Step>
        <Stepper.Step
          title="Step Three"
          canceled
        >
          Description Three
        </Stepper.Step>
        <Stepper.Step
          title="Step Four"
          processing
        >
          Description Four
        </Stepper.Step>
      </Stepper>
    </div>
  );
};

export default Demo;
`;