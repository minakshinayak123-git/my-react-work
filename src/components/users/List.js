import React from 'react' 
import axios from 'axios' // npm install axios
import { Link } from 'react-router-dom'

class UsersList extends React.Component {
    constructor() {
        console.log('constructor')
        super()
        this.state = {
            users: [],
            isLoading: true 
        }
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then((response) => {
                // console.log('users data', response)
                const users = response.data 
                this.setState({ users, isLoading: false })
            })
            .catch((err) => {
                alert(err.message)
            })

    }

    render() {
        
        return (
            <div>   
                {
                    this.state.isLoading ? <div className="spinner-border"> </div> : (
                        <div> 
                            <h1>Listing Users - {this.state.users.length} </h1>
                            <ul>
                                {this.state.users.map((user) => {
                                    return (
                                        <li key={user.id}>
                                            <Link to={`/users/${user.id}`}> {user.name} </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div> 
                    )
                } 
                
            </div>
        )
    }
}

export default UsersList
