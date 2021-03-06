import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  submit = () => {
    this.props.add(this.refs.minhaEntrada.value);
    this.refs.minhaEntrada.value = "";
  };
  render() {
    return (
      <div>
        <input ref="minhaEntrada" placeholder="digite aqui" />
        <button onClick={this.submit}>Adicionar</button>
        <button onClick={this.props.resetar}>Resetar</button>
      </div>
    );
  }
}
const Lista = (props) => props.elementos.map(item => <li>{item}</li>);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaToDo: []
    };
  }
  add = (string) => {
    this.setState({ listaToDo: [...this.state.listaToDo, string] });
  }
  resetar = () => {
    this.setState({ listaToDo: [] });
  }
  render() {
    return (
      <div >
        <Form add={this.add} resetar={this.resetar} />
        <ol>
          <Lista elementos={this.state.listaToDo} />
        </ol>
      </div>
    );
  }
}

export default App;
