import React, { useState, useCallback } from 'react';
import { Tabs } from '@/components';

const Description = ({ content }) => {
  return (
    <div
      className="neumorphism flex items-center justify-center"
      style={{ height: '10rem' }}
    >
      {content}
    </div>
  );
};

const Demo = () => {
  const [activeTab, setActiveTab] = useState('tab-1');
  const onChange = useCallback(tab => setActiveTab(tab), []);

  return (
    <div className="flex flex-col w-full">
      <Tabs activeTab={activeTab} onChange={onChange}>
        <Tabs.Item title="Tab One" key="tab-1">
          <Description content="Description One" />
        </Tabs.Item>
        <Tabs.Item title="Tab Two" key="tab-2">
          <Description content="Description Two" />
        </Tabs.Item>
        <Tabs.Item title="Tab Three" key="tab-3">
          <Description content="Description Three" />
        </Tabs.Item>
        <Tabs.Item title="Tab Four" key="tab-4">
          <Description content="Description Four" />
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default Demo;

Demo.header = 'BASIC';
Demo.href = 'tabs-basic';
Demo.code = `import React, { useState, useCallback } from 'react';
import { Tabs } from '@/components';

const Description = ({ content }) => {
  return (
    <div
      className="neumorphism flex items-center justify-center"
      style={{ height: '10rem' }}
    >
      {content}
    </div>
  );
};

const Demo = () => {
  const [activeTab, setActiveTab] = useState('tab-1');
  const onChange = useCallback(tab => setActiveTab(tab), []);

  return (
    <div className="flex flex-col w-full">
      <Tabs activeTab={activeTab} onChange={onChange}>
        <Tabs.Item title="Tab One" key="tab-1">
          <Description content="Description One" />
        </Tabs.Item>
        <Tabs.Item title="Tab Two" key="tab-2">
          <Description content="Description Two" />
        </Tabs.Item>
        <Tabs.Item title="Tab Three" key="tab-3">
          <Description content="Description Three" />
        </Tabs.Item>
        <Tabs.Item title="Tab Four" key="tab-4">
          <Description content="Description Four" />
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default Demo;
`;