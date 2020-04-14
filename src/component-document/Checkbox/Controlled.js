import React, { useState } from 'react';
import { Checkbox } from '@/components';

const Demo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex">
      <Checkbox
        checked={checked}
        className="mr-5"
        onChange={e => setChecked(e.target.checked)}
      />
      <Checkbox
        checked={checked}
        className="mr-5"
        onChange={e => setChecked(e.target.checked)}
      />
    </div>
  );
};

export default Demo;