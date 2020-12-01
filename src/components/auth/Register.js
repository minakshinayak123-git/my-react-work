import React from 'react' 

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleChange  = (e) =>{
        console.log(e.target.name ,e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        console.log(formData)
    }

    render() {
        return (
            <div>
                <h2>Register with us</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>username</label>
                    <input
                        type="text"
                        value={this.state.username}
                        name = "username"
                        onChange={this.handleChange}
                    /> <br />

                    <label> email </label>
                    <input
                        type="text"
                        value={this.state.email}
                        name ="email"
                        onChange={this.handleChange}
                    /> <br />

                    <label> password </label>
                    <input
                        type="password"
                        value={this.state.password}
                        name ="password"
                        onChange={this.handleChange}
                    /> <br />

                    <input type="submit" value="register" />
                </form>
            </div>
        )
    }
}

export default Register