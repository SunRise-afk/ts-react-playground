// outsource dependencies
import React from 'react';
import { connect } from 'react-redux';

// local dependencies
import { StoreState } from '@/store';
import { Todo, fetchTodos, deleteTodo } from '@/app/controller.ts';

// configure
interface AppProps {
    loading: boolean;
    fetchTodos: () => void;
    data: Array<Todo> | null;
    deleteTodo: typeof deleteTodo;
}

class _App extends React.PureComponent<AppProps> {

  render () {
    return <div>
      <button type="button" onClick={this.props.fetchTodos}>Fetch Todos</button>
      { !this.props.loading
        ? !this.props.data
          ? null
          : this.props.data.map(item => <div key={item.id} onClick={() => this.props.deleteTodo(item.id)}>{ item.title }</div>)
        : <div>Loading...</div> }

    </div>;
  }
}

const mapStateToProps = ({ app }: StoreState) => ({ ...app });

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
