/** @jsx h */
// NB: this is compiled by hand for now

const { Component, h, render } = preact;

class TodoList extends Component {
  state = { todos: [], text: '' };
  setText = e => {
    this.setState({ text: e.target.value });
  };
  addTodo = () => {
    let { todos, text } = this.state;
    todos = todos.concat({ text });
    this.setState({ todos, text: '' });
  };
  render({ }, { todos, text }) {
    return (
      <vbox>
        <hbox>
          <textbox value={text} onInput={this.setText} />
          <button label="Add" onClick={this.addTodo} />
        </hbox>
        <listbox>
          { todos.map( todo => (
            <listitem label={todo.text} />
          )) }
        </listbox>
      </vbox>
    );
  }
}

render((
  <TodoList />
), document.getElementById("appRoot"));
