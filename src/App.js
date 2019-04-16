import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "CRUD Sample Application",
      act: 0,
      index: '',
      datas:[]
    }
  }

  componentDidMount() {
    this.refs.name.focus();
  }

  Submit = (e) => {
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let salary = this.refs.salary.value;
    let age = this.refs.age.value;

    if(this.state.act === 0){
      let data = {
        name, salary, age
      }
      datas.push(data);
    }

    else{
      let index = this.state.index;
      datas[index].name = name;
      datas[index].salary = salary;
      datas[index].age = age;
    }

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.form.reset();
    this.refs.name.focus();
    this.refs.salary.focus();
    this.refs.age.focus();
  }

  Edit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.salary.value = data.salary;
    this.refs.age.value = data.age;

    this.setState({
      act:1,
      index: i
    });

    this.refs.name.focus();
    this.refs.salary.focus();
    this.refs.age.focus();
  }

  Delete = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    
    this.setState({
      datas: datas
    });

    this.refs.name.focus();
    this.refs.salary.focus();
    this.refs.age.focus();
  }
  
  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
      <h2>{this.state.title}</h2>
      <form ref="form" className="form">
        <input type="text" ref="name" placeholder="Name" className="formField"/>
        <input type="text" ref="salary" placeholder="Salary" className="formField"/>  
        <input type="text" ref="age" placeholder="Age" className="formField"/>
        <Button onClick= {this.Submit} className="button">Submit</Button>
      </form>
      <pre>
        {datas.map((data, i) =>
        <li key = {i} className="list">
          {i + 1}. {data.name}, {data.salary}, {data.age}
          <Button onClick={() => this.Edit(i)} className="button">Edit</Button>
          <Button onClick={() => this.Delete(i)} className="button">Delete</Button>
        </li>
      )}
      </pre>
      </div>
    )
  }
}

export default App;
