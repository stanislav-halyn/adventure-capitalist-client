import * as React from 'react';

import PageInterface from './page-interface';

class App extends React.Component<PageInterface, {}> {
  render() {
    return (
      <div>
        <h1>Welcome to React with Typescript</h1>
        <p>The color of this page is: {this.props.color}</p>
      </div>
    );
  }
}

export default App;
