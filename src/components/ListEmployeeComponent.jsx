import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees: []
        }
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) =>{
            // console.log(res)
            this.setState({employees: res.data});
            console.log(this.state.employees)
        })
    }
    render() {
        return (
            <div>
                <h2 className='text-center'>Employees List</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Employees First Name</th>
                                <th>Employees Last Name</th>
                                <th>Employees Email ID Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key={employee.id}>
                                        <td> { employee.name } </td>
                                        <td> { employee.email } </td>
                                        <td> { employee.dob } </td>
                                        <td> { employee.age } </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;
