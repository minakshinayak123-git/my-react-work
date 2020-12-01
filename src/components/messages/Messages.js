import React from 'react' 
import axios from 'axios'
import MessageForm from './MessageForm'
import MessageItem from './MessageItem'
//import '../../App.css'

class Messages extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: [],
            show:false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3033/messages')
            .then((response) => {
                const messages = response.data 
                this.setState({ messages })
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    addMessage = (message) => {
        this.setState((prevState)=>{
            return{
                //messages:prevState.messages.concat(message),
                //unshift 
                messages:[message].concat(prevState.messages)
            }
           
        })
        
    }

    removeMessage = (id)=>{
        this.setState((prevState)=>{
            return {
                messages:prevState.messages.filter(message=>message.id!=id)
            }
        })
    }

    updateMessage = (msg) => {
        this.setState((prevState) => {
            return {
                messages: prevState.messages.map((message) => {
                    if(message.id == msg.id) {
                        return Object.assign({}, message, msg)
                    } else {
                        return Object.assign({}, message)
                    }
                })
            }
        })
    }
    handleShow = () => {
        this.setState((prevState)=>{
            return{
                show:!prevState.show
            }
        })
    }


    render() {

        const firstFiveMessages = this.state.messages.slice(0,5)
        return (
            <div className="messageBox">
                <h2>My Message Board - { this.state.messages.length } </h2>
                <MessageForm addMessage={this.addMessage}/>
                {
                    this.state.show ?
                    this.state.messages.map((message)=>{
                        return <MessageItem key= {message.id}
                        id ={message.id} 
                        body={message.body} 
                        createdAt={message.createdAt}
                        removeMessage={this.removeMessage}
                        updateMessage={this.updateMessage}>
                        </MessageItem>
                    })
                    :firstFiveMessages.map((message)=>{
                        return <MessageItem key= {message.id}
                        id ={message.id} 
                        body={message.body} 
                        createdAt={message.createdAt}
                        removeMessage={this.removeMessage}
                        updateMessage={this.updateMessage}>
                        </MessageItem>

                    })
                    
                }
                <button onClick={this.handleShow}>{this.state.show?'VIEW LESS':'VIEW MORE'}</button>
                
               
            </div>
        )
    }
}

export default Messages