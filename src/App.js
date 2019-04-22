import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import TableRow from './component/TableRow';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: [],
      name: '',
      salary: '',
      age: ''
    };
  }

  componentDidMount() {
    this.getAllEmp();
  }

  getAllEmp() {
    try {
      axios({
        method: 'get',
        url: 'http://dummy.restapiexample.com/api/v1/employees'
      }).then(response => {
        console.log('All Employee Data');
        console.log(response.data);
        this.setState({ details: response.data });
      });
    } catch (err) {
      console.log('Error on fetching all employee data');
      console.log(err);
    }
  }

  getEmpById(id) {
    try {
      axios({
        method: 'get',
        url: `http://dummy.restapiexample.com/api/v1/employee/${id}`
      }).then(response => {
        console.log('Selected Employee Data');
        console.log(response.data);
      });
    } catch (err) {
      console.log('Error on fetching selected employee data');
      console.log(err);
    }
  }

  saveEmp(data) {
    try {
      axios({
        method: 'post',
        url: `http://dummy.restapiexample.com/api/v1/create`,
        data: data
      }).then(response => {
        console.log('Added Employee Data');
        console.log(response.data);
        this.getAllEmp();
      });
    } catch (err) {
      console.log('Error on adding selected employee data');
      console.log(err);
    }
  }

  resetCreateForm() {
    this.setState({
      name: '',
      salary: '',
      age: '',
    })
  }

  render() {
    var rows = [];
    this.state.details.forEach(function (details) {
      rows.push(
        <TableRow
          Id={details.id}
          Name={details.employee_name}
          Salary={details.employee_salary}
          Age={details.employee_age}
        />
      );
    });

    console.log('ROWS===============================');
    console.log(rows);

    const data = {
      name: this.state.name,
      salary: this.state.salary,
      age: this.state.age
    };

    return (
      <div>
        <div className='main'>
          <div>
            <center>
              <h1>CRUD APP - SAMPLE</h1>
            </center>
            <br />
            <div className='tbl-header'>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Age</th>
                    <th />
                    <th />
                  </tr>
                </thead>
              </table>
            </div>
            <div className='tbl-body'>
              <table>
                <tbody>{rows}</tbody>
              </table>
            </div>
            <br />
            <div className='col-3'>
              <input
                className='effect-2'
                type='text'
                placeholder='Name:'
                id='iname'
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
              <span className='focus-border' />
            </div>
            <div className='col-3'>
              <input
                className='effect-2'
                type='number'
                placeholder='Salary:'
                id='isalary'
                value={this.state.salary}
                onChange={e => this.setState({ salary: e.target.value })}
              />
              <span className='focus-border' />
            </div>
            <div className='col-3'>
              <input
                className='effect-2'
                type='number'
                placeholder='Age:'
                id='iage'
                value={this.state.age}
                onChange={e => this.setState({ age: e.target.value })}
              />
              <span className='focus-border' />
            </div>
            <button
              className='btn-add'
              onClick={() => {
                this.saveEmp(data);
                this.resetCreateForm();
                alert('Successfully Added ' + this.state.name + '!')
              }}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;