import React from 'react'
import EmployeeTable from './EmployeeTable'
import EmployeeForm from './EmployeeForm'
import Swal from 'sweetalert2'
import { BsListUl } from "react-icons/bs";
import MDEmployeeTable from './MDEmployeeTable'

class Employees extends React.Component {
    constructor() {
        super()
        this.state = {
            employees: [
                { id: 1, name: 'arjun', email: 'arjun@gmail', gender: 'male', department: 'tech' },
                { id: 2, name: 'sruthi', email: 'sruthi@gmail', gender: 'female', department: 'tech' },
                { id: 3, name: 'deepa', email: 'deepa@gmail', gender: 'female', department: 'hr' },
                { id: 4, name: 'jobin', email: 'jobin@gmail', gender: 'male', department: 'facility' },
            ]
        }
    }

    removeEmployee = (id) => {
        // const confirmRemove = window.confirm('Are you Sure ?')
        // if (confirmRemove) {
        //     this.setState((prevState) => {
        //         return {
        //             employees: prevState.employees.filter(emp => emp.id !== id)
        //         }
        //     })
        // }

        Swal.fire({
            icon: 'error',
            title: 'Are you sure?',
            text: 'You want to remove this employee',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'

        })
            .then((result) => {
                if (result.isConfirmed) {
                    this.setState((prevState) => {
                        return {
                            employees: prevState.employees.filter(emp => emp.id !== id)
                        }
                    }, ()=>{
                        Swal.fire({
                            title: 'Successfully removed employee', 
                            icon: 'success',
                            timer: 2000
                        })
                    })
                }
            })
    }

    addEmployee = (emp) => {
        this.setState((prevState) => {
            return {
                employees: prevState.employees.concat(emp)
            }
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-8">
                        <h1> <BsListUl> </BsListUl> Employees - {this.state.employees.length}</h1>
                        {/* <EmployeeTable data={this.state.employees} removeEmployee={this.removeEmployee} /> */}
                        <MDEmployeeTable data={this.state.employees} removeEmployee={this.removeEmployee}/>
                        <div className="col-md-4">
                            <EmployeeForm addEmployee={this.addEmployee} />

                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default Employees