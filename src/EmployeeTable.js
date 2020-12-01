import React from 'react'
import PropTypes from 'prop-types'
import { BsFillTrashFill } from "react-icons/bs";



function EmployeeTable(props) {
    return (
        <table  className="table table-striped">
            <thead>
                <tr>
                    <th> sl no </th>
                    <th> name </th>
                    <th> email </th>
                    <th> gender </th>
                    <th> department </th>
                    <th> action </th>
                </tr>
            </thead>
            <tbody>
                { props.data.map(function (emp) {
                    return (
                        <tr key={emp.id}>
                            <td> {emp.id} </td>
                            <td> {emp.name} </td>
                            <td> {emp.gender} </td>
                            <td> {emp.email}</td>
                            <td> {emp.department} </td>
                            <td> <button className="btn btn-danger" onClick={() => {
                                props.removeEmployee(emp.id)
                            }}>  <BsFillTrashFill/></button> </td> 
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
EmployeeTable.prototype={
    data:PropTypes.array.isRequired,
    removeEmployee:PropTypes.func.isRequired

}


export default EmployeeTable