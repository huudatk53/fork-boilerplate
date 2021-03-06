import React from 'react';
import Codebox from '@@/.guide/Codebox';

import Basic from '@@/.guide/_documents/Button/demo/Basic';
import Size from '@@/.guide/_documents/Button/demo/Size';
import WithIcon from '@@/.guide/_documents/Button/demo/WithIcon';
import WithBadge from '@@/.guide/_documents/Button/demo/WithBadge';
import Popular from '@@/.guide/_documents/Button/demo/Popular';
import WithLoader from '@@/.guide/_documents/Button/demo/WithLoader';
import GroupButton from '@@/.guide/_documents/Button/demo/GroupButton';
import FluidGroupButton from '@@/.guide/_documents/Button/demo/FluidGroupButton';
import Color from '@@/.guide/_documents/Button/demo/Color';
import Disabled from '@@/.guide/_documents/Button/demo/Disabled';
import Outlined from '@@/.guide/_documents/Button/demo/Outlined';

export default () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col w-1/2">
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Basic } defaultShowCode />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ WithIcon } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ WithBadge } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ GroupButton } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Color } />
        </div>
      </div>
      <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Size } defaultShowCode />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Popular } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ FluidGroupButton } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Outlined } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ Disabled } />
        </div>
        <div className="w-full" style={ { paddingBottom: '1px' } }>
          <Codebox Component={ WithLoader } />
        </div>
      </div>
    </div>
  );
};
