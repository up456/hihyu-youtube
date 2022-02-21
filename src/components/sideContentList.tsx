import React from 'react';
import SideContent from './sideContent';

const SideContentList = () => {
  const contentsList = [...Array(3)];

  return (
    <section id="side-contents">
      {contentsList.map(() => {
        return <SideContent />;
      })}
    </section>
  );
};

export default SideContentList;
