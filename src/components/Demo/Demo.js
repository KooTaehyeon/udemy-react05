import React from 'react';
import MyParagragh from './MyParagragh';
const DemoOutput = (props) => {
  console.log('demo Running');
  return <MyParagragh>{props.show ? 'This is new' : ''}</MyParagragh>;
};

export default React.memo(DemoOutput);
