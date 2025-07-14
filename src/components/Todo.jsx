/* eslint-disable react/destructuring-assignment */
import { Component } from 'react';
import CustomInput from './CustomInput';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      input: this.props.task,
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.setVal = this.setVal.bind(this);
  }

  setVal(newVal) {
    this.setState((state) => ({
      ...state,
      input: newVal,
    }));
  }

  handleEdit(){
    this.setState((state) => ({
      ...state, 
      edit: !this.state.edit,
    }));
  }

  handleConfirm(todoID, newTodo){
    this.handleEdit();
    this.props.handleEdit(todoID, newTodo);
  }
  

  render() {
    return (
      <section>
        
        {!this.state.edit && (<div>{this.props.task}<button onClick={this.handleEdit}>Edit</button></div>)}
        {this.state.edit&& (<div>
          <CustomInput val={this.state.input} setVal={this.setVal}></CustomInput>
          <button onClick={() => {this.handleConfirm(this.props.id, this.state.input)}}>Confirm</button>
          </div>)}
        <button onClick={() => {this.props.handleDelete(this.props.id)}}>Delete</button>
      </section>
    );
  }
}

export default Todo;
