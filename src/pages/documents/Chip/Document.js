import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import Closable from './_demo/Closable';
import Avatar from './_demo/Avatar';
import Size from './_demo/Size';
import Custom from './_demo/Custom';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="BASIC" href="chip-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-2" header="WITH AVATAR" href="chip-avatar" code={Avatar.code}>
          <Avatar />
        </Codebox>
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="CLOSABLE" href="chip-closable" code={Closable.code}>
          <Closable />
        </Codebox>
        <Codebox className="mb-2" header="SIZE" href="chip-size" code={Size.code}>
          <Size />
        </Codebox>
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" header="CUSTOM" href="chip-custom" code={Custom.code}>
          <Custom />
        </Codebox>
      </div>
    </div>
  );
};

