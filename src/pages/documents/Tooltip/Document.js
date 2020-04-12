import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './_demo/Basic';
import Placement from './_demo/Placement';
import DefaultVisible from './_demo/DefaultVisible';
import SemanticPlacement from './_demo/SemanticPlacement';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="BASIC" href="tooltip-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-2" header="DEFAULT VISIBLE" href="tooltip-default-visible" code={DefaultVisible.code}>
          <DefaultVisible />
        </Codebox>
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="PLACEMENT" href="tooltip-basic" code={Placement.code}>
          <Placement />
        </Codebox>
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" header="SEMANTIC PLACEMENT" href="tooltip-semantic-placement" code={SemanticPlacement.code} description={SemanticPlacement.description}>
          <SemanticPlacement />
        </Codebox>
      </div>
    </div>
  );
};

