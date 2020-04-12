import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import WithRef from './_demo/WithRef';
import Disabled from './_demo/Disabled';
import MinAndMax from './_demo/MinAndMax';
import Step from './_demo/Step';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="BASIC" href="input-number-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-2" header="WITH REF" href="input-number-with-ref" code={WithRef.code}>
          <WithRef />
        </Codebox>
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="MIN AND MAX" href="input-number-min-max" code={MinAndMax.code}>
          <MinAndMax />
        </Codebox>
        <Codebox className="mb-2" header="STEP" href="input-number-step" code={Step.code}>
          <Step />
        </Codebox>
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" header="DISABLED" href="input-number-disabled" code={Disabled.code}>
          <Disabled />
        </Codebox>
      </div>
    </div>
  );
};

