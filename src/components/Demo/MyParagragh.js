import React from 'react';

const MyParagragh = (props) => {
  console.log('my Running');
  return <p>{props.children}</p>;
};

export default MyParagragh;
