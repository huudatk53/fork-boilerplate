import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Basic from './demo/Basic';
import Size from './demo/Size';
import WithIcon from './demo/WithIcon';
import WithBadge from './demo/WithBadge';
import Popular from './demo/Popular';
import WithLoader from './demo/WithLoader';
import GroupButton from './demo/GroupButton';
import FluidGroupButton from './demo/FluidGroupButton';
import Color from './demo/Color';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Basic } />
         <Codebox className="mb-1" Component={ Size } />
         <Codebox className="mb-1" Component={ WithIcon } />
         <Codebox className="mb-1" Component={ WithBadge } />
         <Codebox className="mb-1" Component={ Popular } />
         <Codebox className="mb-1" Component={ WithLoader } />
         <Codebox className="mb-1" Component={ GroupButton } />
         <Codebox className="mb-1" Component={ FluidGroupButton } />
         <Codebox className="mb-1" Component={ Color } />
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
           <Anchor.Link key={`#${ Basic.href}` } title={ Basic.anchorTitle } />
           <Anchor.Link key={`#${ Size.href}` } title={ Size.anchorTitle } />
           <Anchor.Link key={`#${ WithIcon.href}` } title={ WithIcon.anchorTitle } />
           <Anchor.Link key={`#${ WithBadge.href}` } title={ WithBadge.anchorTitle } />
           <Anchor.Link key={`#${ Popular.href}` } title={ Popular.anchorTitle } />
           <Anchor.Link key={`#${ WithLoader.href}` } title={ WithLoader.anchorTitle } />
           <Anchor.Link key={`#${ GroupButton.href}` } title={ GroupButton.anchorTitle } />
           <Anchor.Link key={`#${ FluidGroupButton.href}` } title={ FluidGroupButton.anchorTitle } />
           <Anchor.Link key={`#${ Color.href}` } title={ Color.anchorTitle } />
        </Anchor>
      </div>
    </div>
  );
};