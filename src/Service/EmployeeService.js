import axios from 'axios';

const Employee = "http://localhost:8080/api/v1/employees";

class EmployeeService {
    
    getEmployees(){
        return axios.get(Employee);
    }
    createEmployee(employee){
        return axios.post(Employee, employee);
    }
    getEmployeeById(employeeId){
        return axios.get(Employee + '/' + employeeId);
    }
    updateEmployee(employee, employeeId){
        return axios.put(Employee + '/' + employeeId, employee);
    }
    deleteEmployee(employeeId){
        return axios.delete(Employee + '/' + employeeId);
    }
}

export default new EmployeeService();