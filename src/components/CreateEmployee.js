import React, { Component } from 'react'
import EmployeeService from '../Service/EmployeeService'

class CreateEmployee extends Component {
    state = {
        id: this.props.match.params.id,
        firstName: '',
        lastName: '',
        emailId: '',
    }

    changeFirstHandler = (event) => {
        this.setState({ firstName: event.target.value })
    }
    changeLastHandler = (event) => {
        this.setState({ lastName: event.target.value })
    }
    changeEmailHandler = (event) => {
        this.setState({ emailId: event.target.value })
    }
    cancel = () => {
        this.props.history.push("/employees");
    }

    componentDidMount() {

        if (this.state.id == -1) {
            return
        }
        else {
            EmployeeService.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId: employee.emailId
                })
            })
        }
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };
        console.log(JSON.stringify(employee));

        if(this.state.id == -1){
            EmployeeService.createEmployee(employee).then(res => {
                this.props.history.push("/employees");
            })
        }
        else{
            EmployeeService.updateEmployee(employee, this.state.id).then(res => {
                this.props.history.push('/employees');
            })
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className=" text-center">{ this.state.id == -1 ? "Add Employee": "Update Employee" }</h3>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <label htmlFor="">First Name</label>
                                        <input type="text" placeholder="First Name" name=" firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstHandler} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Last Name</label>
                                        <input type="text" placeholder="Last Name" name=" lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastHandler} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Email</label>
                                        <input type="text" placeholder="Email" name="emailId" className="form-control"
                                            value={this.state.emailId} onChange={this.changeEmailHandler} required />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEmployee
