import React from 'react';
import { Collapse } from '@/components';

const Description = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: '10rem' }}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </div>
  );
};

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Collapse accordion>
        <Collapse.Item title="Collapse One" key="panel-1">
          <Description />
        </Collapse.Item>
        <Collapse.Item title="Collapse Two" key="panel-2">
          <Description />
        </Collapse.Item>
        <Collapse.Item title="Collapse Three" key="panel-3">
          <Description />
        </Collapse.Item>
      </Collapse>
    </div>
  );
};

export default Demo;

Demo.header = 'ACCORDION';
Demo.href = 'collapse-accordion';
Demo.code = `import React from 'react';
import { Collapse } from '@/components';

const Description = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: '10rem' }}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </div>
  );
};

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Collapse accordion>
        <Collapse.Item title="Collapse One" key="panel-1">
          <Description />
        </Collapse.Item>
        <Collapse.Item title="Collapse Two" key="panel-2">
          <Description />
        </Collapse.Item>
        <Collapse.Item title="Collapse Three" key="panel-3">
          <Description />
        </Collapse.Item>
      </Collapse>
    </div>
  );
};

export default Demo;
`;