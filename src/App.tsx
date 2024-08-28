// outsource dependencies
import React from 'react';

// configure
interface AppProps {
  color?: string;
}

interface AppState {
  counter: number;
}

class App extends React.PureComponent<AppProps, AppState> {
  constructor (props:AppProps) {
    super(props);
    this.state = { counter: 0 };
  }


  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render () {
    return <div>
      <button onClick={this.onIncrement}>Increment</button>
      <button onClick={this.onDecrement}>Decrement</button>
      <div>{ this.state.counter }</div>
    </div>;
  }
}

export default App;
