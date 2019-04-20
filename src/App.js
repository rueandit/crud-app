import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  getAllEmp() {
    try {
      axios({
        method: 'get',
        url: 'http://dummy.restapiexample.com/api/v1/employees'
      }).then(response => {
        console.log('All Employee Data');
        console.log(response.data);
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

  updateEmpById(id, data) {
    try {
      axios({
        method: 'put',
        url: `http://dummy.restapiexample.com/api/v1/update/${id}`,
        data: data
      }).then(response => {
        console.log('Updated Employee Data');
        console.log(response.data);
      });
    } catch (err) {
      console.log('Error on updating selected employee data');
      console.log(err);
    }
  }

  deleteEmpById(id) {
    try {
      axios({
        method: 'delete',
        url: `http://dummy.restapiexample.com/api/v1/delete/${id}`
      }).then(response => {
        console.log('Deleted Employee Data');
        console.log(response.data);
      });
    } catch (err) {
      console.log('Error on deleting selected employee data');
      console.log(err);
    }
  }

  saveEmpById(data) {
    try {
      axios({
        method: 'post',
        url: `http://dummy.restapiexample.com/api/v1/create`,
        data: data
      }).then(response => {
        console.log('Added Employee Data');
        console.log(response.data);
      });
    } catch (err) {
      console.log('Error on adding selected employee data');
      console.log(err);
    }
  }

  render() {

    const data = {
      name: 'Rue',
      age: '21',
      salary: '30000'
    };

    return (
      <div>
        {/* <div className='header'>
          {/* <div className='logos'>
            <img src={'ubp.png'} className='logo' alt='UnionBankPH' />
          </div> 
    </div>*/}
        <div id='sidebarMenu'>
          <ul className='sidebarMenuInner'>
            <a href="#open-modal-view"><li onClick={() => { this.getEmpById('1139') }}>View Employee</li></a>
            <a href="#open-modal-add"><li onClick={() => { this.saveEmpById(data) }}>Add Employee</li></a>
            <a href="#open-modal-update"><li onClick={() => { this.updateEmpById('1128', data) }}>Update Employee</li></a>
            <a href="#open-modal-delete"><li onClick={() => { this.deleteEmpById('1128') }}>Delete Employee</li></a>
          </ul>
        </div>
        <div className='header'>
        </div>
        <div className='main'>
          <div>
            <h1>CRUD APP - SAMPLE</h1>
            <div class="tbl-header">
              <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Company</th>
                    <th>Price</th>
                    <th>Change</th>
                    <th>Change %</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="tbl-content">
              <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                  <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                  </tr>
                  <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                  </tr>
                  <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                  </tr>
                  <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                  </tr>
                  <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                  </tr>
                  <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                  </tr>
                  <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                  </tr>
                  <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                  </tr>
                  <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                  </tr>
                  <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                  </tr>
                  <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                  </tr>
                  <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                  </tr>
                  <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                  </tr>
                  <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                  </tr>
                  <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                  </tr>
                  <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                  </tr>
                  <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                  </tr>
                  <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                  </tr>
                  <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                  </tr>
                  <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                  </tr>
                  <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                  </tr>
                  <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                  </tr>
                  <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                  </tr>
                  <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                  </tr>
                  <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                  </tr>
                  <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                  </tr>
                  <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                  </tr>
                  <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                  </tr>
                  <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                  </tr>
                  <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                  </tr>
                  <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                  </tr>
                  <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                  </tr>
                </tbody>
              </table>
            </div>


            {/* Modals */}
            <div id="open-modal-view" class="modal-window">
              <div>
                <a href="#modal-close" title="Close" class="modal-close">close &times;</a>
                <h1>View Employee By ID</h1>
                <div>The quick brown fox jumped over the lazy dog.</div>
              </div>
            </div>

            <div id="open-modal-add" class="modal-window">
              <div>
                <a href="#modal-close" title="Close" class="modal-close">close &times;</a>
                <h1>Add Employee</h1>
                <div>The quick brown fox jumped over the lazy dog.</div>
              </div>
            </div>

            <div id="open-modal-update" class="modal-window">
              <div>
                <a href="#modal-close" title="Close" class="modal-close">close &times;</a>
                <h1>Update Employee</h1>
                <div>The quick brown fox jumped over the lazy dog.</div>
              </div>
            </div>

            <div id="open-modal-delete" class="modal-window">
              <div>
                <a href="#modal-close" title="Close" class="modal-close">close &times;</a>
                <h1>Delete Employee</h1>
                <div>The quick brown fox jumped over the lazy dog.</div>
              </div>
            </div>

          </div>
        </div>
      </div>

    );
  }
}

export default App;
