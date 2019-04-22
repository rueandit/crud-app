import React from 'react';
import axios from 'axios';

export default class TableRow extends React.Component {

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
                window.location.reload();
            });
        }
        catch (err) {
            console.log('Error on deleting selected employee data');
            console.log(err);
        }
    }
    render() {
        return (
            <tr key={this.props.Id}>
                <td>{this.props.Name}</td>
                <td>{this.props.Salary}</td>
                <td>{this.props.Age}</td>
                <td>
                    <button className="btn-edit" onClick={() => { console.log(this.props.Id); }}>EDIT</button>
                </td>
                <td>
                    <button className="btn-delete" onClick={() => { this.deleteEmpById(this.props.Id); alert('Successfully deleted ' + this.props.Name + '!') }}>DELETE</button>
                </td>
            </tr>
        );
    }
}