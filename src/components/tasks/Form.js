import React from 'react' 
import PropTypes from 'prop-types'

class TasksForm extends React.Component {
    constructor(){ 
        super() 
        this.state = {
            id: '',
            title: '',
            status: false,
            completedDate: ''
        }
    }

    handleChange = (e) =>{
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleStatusChange = (e) => {
        const status = e.target.checked
        this.setState({ status })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: parseInt(this.state.id),
            title: this.state.title,
            status: this.state.status,
            completedDate: this.state.completedDate
        }

        this.props.addTask(formData)

        this.setState((prevState) => {
            return {
                id: '',
                title: '',
                status: false,
                completedDate: ''
            }
        })
    }

    render(){ 
        return (
            <div> 
                <form onSubmit={this.handleSubmit}>
                    <label> id </label>
                    <input type="number" value={this.state.id} name="id" onChange={this.handleChange} /> <br />

                    <label> title </label>
                    <input type="text" value={this.state.title} name="title" onChange={this.handleChange} /> <br />

                    <label> status </label>
                    <input type="checkbox" onChange={this.handleStatusChange} checked={this.state.status} /> <br />

                    {this.state.status && (
                        <div>
                            <label> completed date </label>
                            <input type="date" value={this.state.completedDate} name ="completedDate" onChange={this.handleChange} />
                        </div>
                    )}

                    <input type="submit" value="add task" />

                </form>
            </div> 
        )
    }
}

TasksForm.propTypes = {
    addTask: PropTypes.func.isRequired
}

export default TasksForm