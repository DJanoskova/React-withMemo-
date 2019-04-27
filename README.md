# withmemo()

Update a component only if a certain prop changes with using `withMemo(Component, checkedProps)` hoc.

### Usage

```
import React from 'react';
import withMemo from './withMemo';

const MemberRow = ({ member, handleDeleteMember }) => (
  <div>Hi, this is {member.name} {member.surname}</div>
);

export default withMemo(MemberRow, ['member']);

```
(re-render only if the `member` prop changes)
