import React from 'react';
import { Collapse, Badge } from '@@/fork-ui/src/components/core';
import {
  MailOpened,
  PlaneDeparture,
  Share,
  Rotate2,
} from '@@/fork-ui/src/components/icons';
import DemoContent from '@@/.guide/shared/DemoContent';

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Collapse accordion defaultActivePanels={['panel-1']}>
        <Collapse.Item
          title={(
            <span className="flex">
              <Share className="mr-2" />NORMAL PANEL
            </span>
          )}
          key="panel-1"
        >
          <DemoContent />
        </Collapse.Item>
        <Collapse.Item 
          fresh
          title={(
            <span className="flex">
              <Rotate2 className="mr-2" />FRESH PANEL
            </span>
          )}
          key="panel-2"
        >
          <DemoContent />
        </Collapse.Item>
        <Collapse.Item
          title={(
            <span className="flex">
              <PlaneDeparture className="mr-2" />DISABLED PANEL
            </span>
          )}
          disabled
          key="panel-3"
        >
          <DemoContent />
        </Collapse.Item>
        <Collapse.Item
          title={(
            <Badge count={99} topRight dot>
              <span><MailOpened className="mr-2" />WITH BADGE</span>
            </Badge>
          )}
          key="panel-5"
        >
          <DemoContent />
        </Collapse.Item>
      </Collapse>
    </div>
  );
};

export default Demo;
