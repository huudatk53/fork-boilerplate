import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Basic from './demo/Basic';
import Required from './demo/Required';
import Status from './demo/Status';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ Required } />
         <Codebox className="mb-1" Component={ Status } />
      </div>
      <div className="pl-1" style={ { flexBasis: '200px' } }>
        <Anchor
          top={75}
          style={ {
            backgroundColor: 'var(--rc-color--300)',
            height: 'calc(100vh - 75px',
            borderRadius: '0.5rem',
          } }
        >
           <Anchor.Link key={`#${ Basic.href}` } title={ Basic.header } />
           <Anchor.Link key={`#${ Required.href}` } title={ Required.header } />
           <Anchor.Link key={`#${ Status.href}` } title={ Status.header } />
        </Anchor>
      </div>
    </div>
  );
};