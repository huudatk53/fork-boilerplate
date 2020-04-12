import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import Controlled from './_demo/Controlled';
import WithRef from './_demo/WithRef';
import Disabled from './_demo/Disabled';
import NoEye from './_demo/NoEye';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="BASIC" href="password-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-2" header="WITH REF" href="password-with-ref" code={WithRef.code}>
          <WithRef />
        </Codebox>
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="CONTROLLED" href="password-controlled" code={Controlled.code}>
          <Controlled />
        </Codebox>
        <Codebox className="mb-2" header="NO EYE" href="password-no-eye" code={NoEye.code}>
          <NoEye />
        </Codebox>
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" header="DISABLED" href="password-disabled" code={Disabled.code}>
          <Disabled />
        </Codebox>
      </div>
    </div>
  );
};

