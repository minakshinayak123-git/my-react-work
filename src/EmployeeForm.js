import React from 'react'
import Axios from 'axios'

class EmployeeForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            gender: '',
            department: '',
        }
    }

    handleNameChange = (e) => {
        let name = e.target.value
        this.setState({ name })

    }
    // getGenderInfo = (name) =>{
    //     const xhr = new XMLHttpRequest()
    //     xhr.open('GET',`https://api.genderize.io/?name=${name}`)
    //     xhr.send()
    //     xhr.onload = ()=>{
    //         const data = JSON.parse(xhr.responseText) //object
    //         this.setState({gender:data.gender})
    //     }
    // }

    getGenderInfo = () => {
        Axios.get(`https://api.genderize.io/?name=${this.state.name}`).then((response) => {

            const gender = response.data.gender
            this.setState({ gender })

        }).catch((err) => {
            console.log(err)
        })
    }


    handleEmailChange = (e) => {
        console.log(this.state.gender)
        let email = e.target.value
        this.setState({ email })
    }

    handleGenderChange = (gender) => {
        this.setState({ gender })
    }

    handleDeptChange = (e) => {
        const department = e.target.value
        this.setState({ department })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: Number(new Date()),
            name: this.state.name,
            email: this.state.email,
            gender: this.state.gender,
            department: this.state.department
        }
        if (formData.name == '') {
            alert('name cant be blank')
        } else {
            this.props.addEmployee(formData)
            this.setState({
                name: '',
                email: '',
                department: '',
                gender: ''
            })
        }
    }
    render() {

        return (
            <div>
                <h2>Add Employee</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" >Name</label>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            onBlur={this.getGenderInfo()}
                            id="name"
                            className="form-control"
                        />

                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            id="email"
                            className="form-control"
                        />
                    </div>


                    <label> gender </label>
                    <div class="custom-control custom-radio custom-control-inline">

                        <input type="radio"
                            name="gender"
                            id="male"
                            className="custom-control-input"
                            checked={this.state.gender == 'male'}
                            onChange={() => {
                                this.handleGenderChange(this.state.name)
                            }} />
                        <label class="custom-control-label" for="male">male</label>
                    </div>

                    {/* <input
                            type="radio"
                            name="gender"
                            id="customRadioInline1"
                            name="customRadioInline1"
                            className="custom-control-input"
                            checked={this.state.gender == 'male'}
                            onChange={() => {
                                this.handleGenderChange(this.state.name)
                            }}
                        /> male */}
                    <div class="custom-control custom-radio custom-control-inline">

                        <input type="radio"
                            name="gender"
                            id="female"
                            className="custom-control-input"
                            checked={this.state.gender == 'female'}
                            onChange={() => {
                                this.handleGenderChange(this.state.name)
                            }} />
                        <label class="custom-control-label" for="male">female</label>
                    </div>
                    {/* <input
                            type="radio"
                            name="gender"
                            checked={this.state.gender == 'female'}
                            onChange={() => {
                                this.handleGenderChange(this.state.name)
                            }}
                        /> female
                    <br /> */}

                    <div className="form-group">
                        <label htmlFor="department">department</label>
                        <select value={this.state.department} onChange={this.handleDeptChange} className="form-control" id="department">
                            <option value=""> select </option>
                            <option value="tech"> technology </option>
                            <option value="hr"> human resource </option>
                            <option value="facility"> facility management </option>
                        </select>
                    </div>



                    <input type="submit" value="Submit" className="btn btn-secondary"></input>
                </form>
            </div>
        )
    }
}

export default EmployeeForm