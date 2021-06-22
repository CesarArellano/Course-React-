import React, { useState } from 'react';
import { PageOne } from './components/pages/PageOne';
import { PageTwo } from './components/pages/PageTwo';
import { TabOne } from './components/tabs/TabOne';
import { TabTwo } from './components/tabs/TabTwo';
import './index.css';

export const ChangeView = () => {
  const [state, setState] = useState(true);

  return (
    <div className="tabs">
      <TabOne setState={ setState } />
      <TabTwo setState={ setState } />
      {
        state ? <PageOne /> : <PageTwo />
      }
    </div>
  )
}
