import React from 'react'
import PropTypes from 'prop-types'

function TasksTable(props) {
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th> # </th>
                        <th> title </th>
                        <th> status </th>
                        <th> completed date </th>
                        <th> action </th>
                    </tr>
                </thead>
                <tbody>
                    {props.tasks.map((task, i) => {
                        return (
                            <tr key={task.id}>
                                <td> {task.id}</td>
                                <td> {task.title}</td>
                                <td> {task.status ? 'completed' : "ongoing"}</td>
                                <td> {task.status ? task.completedDate : '-'} </td>
                                <td>
                                    <button onClick={() => {
                                        props.handleShow(task)
                                    }}> show </button>

                                    <button onClick={() => {
                                        props.handleRemove(task.id)
                                    }}>
                                        remove
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}   

TasksTable.propTypes = {
    tasks: PropTypes.array.isRequired,
    handleShow: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired
}

export default TasksTable