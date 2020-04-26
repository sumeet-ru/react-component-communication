import React, { Component } from 'react';
// import UsingProps from './Parent2Child/UsingProps';
// import UsingInstanceMethod from './Parent2Child/UsingInstanceMethod';

// import UsingCallback from './Child2Parent/UsingCallback';

// import UsingBroadcastChannel from './AnyComponent/UsingBroadcastChannel';
import UsingObservable from './AnyComponent/UsingObservable';

class App extends Component {
  render() {
    return (
      // <UsingProps />
      // <UsingInstanceMethod />
      // <UsingCallback />
      // <UsingBroadcastChannel />
      <UsingObservable />
    ); 
  }
}

export default App;
