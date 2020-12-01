import React from 'react'
import axios from 'axios'

class UserShow extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                console.log(response)
                const user = response.data
                this.setState({ user })
            }
            ).catch((error)=>{
                alert(error.message)
            })
    }

    render() {
        return (
            <div>
                <h2>User details -{this.props.match.params.id} </h2>
                <p>name - {this.state.user.name} </p>
                <p>email- {this.state.user.email} </p>

            </div>
        )
    }
}

export default UserShow