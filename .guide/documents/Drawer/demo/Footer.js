import React, { useState, useCallback } from 'react';
import { Button, Drawer } from '@@/fork-ui/src/components/core';
import DemoContent from '@@/.guide/shared/DemoContent';

const Demo = () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Drawer
        open={open}
        onClose={onClose}
        className="w-1/2"
      >
        <Drawer.Header refreshable>DRAWER TITLE</Drawer.Header>
        <Drawer.Body>
          <DemoContent />
          <DemoContent />
          <DemoContent />
          <DemoContent />
        </Drawer.Body>
        <Drawer.Footer>
          <Button>Save</Button>
        </Drawer.Footer>
      </Drawer>
      <Button onClick={onOpen}>Open Drawer</Button>
    </div>
  );
};

export default Demo;
