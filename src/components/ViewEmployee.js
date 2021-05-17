import React, { Component } from 'react'
import EmployeeService from '../Service/EmployeeService'

export default class ViewEmployee extends Component {
    state = {
        id: this.props.match.params.id,
        employee: {}
    }
    
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({employee: res.data});
        })
    }
    backToHome = () => {
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Employee Details</h3>
                    <hr />
                    <div className="card-body">
                    <div className="row">
                        <label>Employee ID:</label>
                        <h3>{this.state.employee.id}</h3>
                        <hr />
                        <label>Employee First Name:</label>
                        <h3>{this.state.employee.firstName}</h3>
                        <hr />
                        <label>Employee Last Name:</label>
                        <h3>{this.state.employee.lastName}</h3>
                        <hr />
                        <label>Email ID:</label>
                        <h3>{this.state.employee.emailId}</h3>
                    </div>
                    </div>
                    <button className="btn btn-warning" onClick = {this.backToHome}>Back To Home Page</button>
                </div>
            </div>
        )
    }
}
