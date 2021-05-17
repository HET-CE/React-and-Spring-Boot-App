import React, { Component } from 'react'
import EmployeeService from '../Service/EmployeeService'

export default class ListEmployeeComponent extends Component {
    state = {
        employees: []
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data})
        });
    }

    addEmployee = () => {
        this.props.history.push("/add-employee/-1");
    }
    editEmployee = (id) => {
        this.props.history.push(`/add-employee/${id}`);
    }
    deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id).then((res) => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        })
    }
    viewEmployee = (id) => {
        this.props.history.push(`/view-employee/${id}`)
    }

    render() {
        return (
            <div>
                <h2 className = "text-center">Employee List:</h2>
                <div className="row">
                    <button className="btn btn-primary mb-2" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>First Name:</th>
                                <th>Last Name:</th>
                                <th>Email Id:</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {   
                                this.state.employees.map((employee) => {
                                    return (    <tr key={employee.id}>
                                                    <td>{employee.firstName}</td>
                                                    <td>{employee.lastName}</td>
                                                    <td>{employee.emailId}</td>
                                                    <td>
                                                        <button onClick = { () => this.editEmployee(employee.id)} className=" btn btn-info">Update</button>
                                                        <button style={{marginLeft: "10px"}} onClick = { () => this.deleteEmployee(employee.id)} className=" btn btn-danger">Delete</button>
                                                        <button style={{marginLeft: "10px"}} onClick = { () => this.viewEmployee(employee.id)} className=" btn btn-warning">View</button>
                                                    </td>
                                                </tr>   )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
