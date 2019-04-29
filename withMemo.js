import { memo } from 'react';

const withMemo = (Component, checkedProps) => {
  function areEqual (prevProps, nextProps) {
    return checkedProps.every(checkedProp => {
      return (JSON.stringify(prevProps[checkedProp]) === JSON.stringify(nextProps[checkedProp]))
    })
  }

  return memo(Component, areEqual);
};

export default withMemo;
