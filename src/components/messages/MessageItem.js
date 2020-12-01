import React from 'react'
import axios from 'axios'
import moment from 'moment'
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs'
import propTypes from 'prop-types'


class MessageItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: props.body,
            editMode: false,
            hover: false
        }
    }

    handleRemove = () => {
        const confirmRemove = window.confirm("Are you sure?")
        if (confirmRemove) {
            axios.delete(`http://localhost:3033/messages/${this.props.id}`).then((response) => {
                const message = response.data
                this.props.removeMessage(message.id)
            }).catch((err) => {
                alert(err.message)
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleEdit = () => {
        this.setState((prevState) => {
            return {
                editMode: !prevState.editMode
            }
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            body: this.state.body
        }
        axios.put(`http://localhost:3033/messages/${this.props.id}`, formData)
            .then((response) => {
                const message = response.data
                this.setState((prevState) => {
                    return {
                        editMode: !prevState.editMode
                    }
                })
                this.props.updateMessage(message)
            })
    }

    handleDisplay = () => {
        alert(moment(this.props.crteatedAt).format('dddd MMM Do YYYY, h:mm:ss a'))
    }

    handleMouseOver = () => {

        this.setState({
            hover: true
        })
    }
    handleMouseOut = () => {
        this.setState({
            hover: false
        })
    }



    render() {
        return (
            <div className="messageItem">
                {
                    this.state.editMode ? (
                        <form>
                            <input
                                type="text"
                                value={this.state.body}
                                onChange={this.handleChange}
                                name="body"
                            />
                        </form>
                    ) : <p> {this.props.body} </p>
                }
                <small onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>{
                    this.state.hover ?
                        moment(this.props.createdAt).format('dddd MMM Do YYYY, h:mm:ss a')
                        :
                        moment(this.props.createdAt).fromNow()

                }
                </small>
                <br />
                <BsFillTrashFill onClick={this.handleRemove} className="icon" />

                {
                    this.state.editMode ? <button onClick={this.handleSubmit}>update</button> : <BsPencilSquare className="icon" onClick={this.handleEdit} />
                }


                {/*  <button onClick={this.state.editMode ? this.handleSubmit : this.handleEdit}> {this.state.editMode ? 'update' : <BsPencilSquare />} </button>
               <hr />
              */}


            </div>

        )
    }

}

// MessageItem.propTypes = {
//     id: PropTypes.number.isRequired,
//     body: PropTypes.string,
//     createdAt: PropTypes.object.isRequired,
//     removeMessage: PropTypes.func.isRequired,
//     updateMessage: PropTypes.func.isRequired
// }

export default MessageItem