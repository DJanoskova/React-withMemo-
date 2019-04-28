# withMemo(Component, checkedProps)

Update a component only if a certain prop changes with using `withMemo()` hoc.
Of course you can pass multiple props.

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

---

If you want to always return *true* (for example for a layout wrapper you don't ever want to re-render), just pass an empty array of props like so
```
import React from 'react';
import withMemo from './withMemo';

const Layout = () => {
  // this layout is getting a history prop from the router
  // although we're not using it 
  // which causes many re-renders
  
  return (
    <>
      <Header />
      <Switch>
        <Route path="/members" component={Members} />
      </Switch>
    </>
  )
};

export default withMemo(Layout, []);

```
