import React from 'react'
import axios from 'axios'
//import '../../App.css'

class MessageForm extends React.Component { 
    constructor() {
        super()
        this.state = {
            body : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            body: this.state.body 
        }
        axios.post('http://localhost:3033/messages',formData).then((response)=>{
            const message = response.data
            console.log(message)
            this.props.addMessage(message)
            this.setState({body:''})
        }).catch((err)=>{
            alert(err.message)
        })
        
    }

    render() {
        return (
            <div className="messageForm">
                <h3>Add Message</h3>
                <form onSubmit={this.handleSubmit}>
                    <textarea 
                        value={this.state.body} 
                        onChange={this.handleChange} 
                        name="body" cols="35" rows="5"
                        className="messageForm"
                    ></textarea>
                    <br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default MessageForm