/* eslint-disable react/destructuring-assignment */
import { Component } from 'react';
import Count from './Count';
import Todo from './Todo';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [{task: 'Just some demo tasks', id: crypto.randomUUID()}, {task: 'As an example', id: crypto.randomUUID()}],
      inputVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      todos: state.todos.concat({task: state.inputVal, id: crypto.randomUUID()}),
      inputVal: '',
    }));
  }

  handleDelete(todoID){
    const newArr = this.state.todos.filter((t) => {return t.id !== todoID;});
    this.setState((state) => ({
      ...state,
      todos: newArr,
      //this.state.todos.inputVal
    }));
  }

  handleEdit(todoID, newTodo){
    const newArr = [...this.state.todos]; //filter((t) => {return t.id !== todoID;});
    const length = newArr.length;
    for(let i = 0; i < length; i++)
    {
      const t = newArr[i];
      //if match, update task
      if(t.id === todoID)
      {
        t.task = newTodo;
        newArr[i] = t;
      }
    }
    this.setState((state) => ({
      ...state,
      todos: newArr,
      //this.state.todos.inputVal
    }));
  }

  render() {
    return (
      <section>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => (
            <>
              {/*<li key={todo}>{todo}
                <button onClick={() => {this.handleDelete(todo)}}>Delete</button>
              </li>*/}
              {console.log(todo)}
              {<li key={todo}>
                <Todo state={this.state} setState={this.setState} task={todo.task} id={todo.id} handleDelete={this.handleDelete} handleEdit={this.handleEdit}></Todo>
              </li>}
            </>
            
          ))}
        </ul>
        <Count>{this.state.todos.length}</Count>
      </section>
    );
  }
}

export default ClassInput;
