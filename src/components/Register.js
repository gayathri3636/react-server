import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import * as Actions from '../redux/actions/index'

class Register extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        name:'',
        email: '',
        phonenumber: '',
        password: '',
        cpassword: '',
        error: "",
        isValid:true,
        result: []
    }
}

    handleChange = (e) => {
        console.log("From handleChange")
        this.setState({[e.target.name]:e.target.value})
    }

    handleClear = (e) => {
        console.log("handle clear clicked")
        this.setState({
            name:'',
            email: '',
            phonenumber: '',
            password: '',
            cpassword: '',
            isValid:true,
            error: "",
            result: []
        })
    }

    handleValidation = (e) => {
        const{name,email,phonenumber,password, cpassword} = this.state;
        let err = []
        if(name.length === 0){
            err.push({message: "name field should not be empty"})
            alert("Name should not be empty")
        }
        if(phonenumber.length === 0){
            err.push({message: "Phone number should not be empty"})
            alert("phonenumber should not be empty")
        }
        if(email.indexOf('@gmail.com') === -1 && email.indexOf('@rsrit.com') === -1){
            err.push({message: "It should be an email from gmail or Rsrit"})
            alert("email should be from gmail or rsrit")
        }
        if(password !== cpassword){
            err.push({message: "password are not matched"})
            alert("passwords not matched");
        }
        return true
    }

    componentDidMount = () => {
        this.props.dispatch(Actions.registerUser())
    }

    handleSubmit = (e) => {
        console.log("Register button clicked")

        e.preventDefault();
        try {
            this.props.history.push("/Login");
        } catch (e) {
            alert(e.message);
        }
    }

    render(){
        return(
            <div className = "form-group">
                <form>
                    <h2>Registration Form</h2>
                    <label htmlFor = "name">Name:
                    <input 
                    type = "textl"
                    id = "name"
                    className  ="form-control"
                    name = "name"
                    value ={this.state.name}
                    placeholder = "Enter full name"
                    onChange = {this.handleChange}/>
                    </label>
                    <br/>
                    

                    <label htmlFor = "Email">Email Address:
                    <input 
                    type = "email"
                    id = "email"
                    name = "email"
                    className  ="form-control"
                    value ={this.state.email}
                    placeholder = "Enter email address"
                    onChange = {this.handleChange}/>
                    </label>
                    <br/>

                    <label htmlFor = "phonenumber">PhoneNumber:
                    <input 
                    type = "phonenumber"
                    id = "phonenumber"
                    className  ="form-control"
                    name = "phonenumber"
                    value ={this.state.phonenumber}
                    placeholder = "Enter Phone number"
                    onChange = {this.handleChange}/>
                    </label>
                    <br/>

                    <label htmlFor = "password">Password:
                    <input 
                    type = "password"
                    id = "password"
                    className  ="form-control"
                    name = "password"
                    value = {this.state.password}
                    placeholder = "Enter password"
                    onChange = {this.handleChange} />
                    </label>
                    <br/>

                    <label htmlFor = "confirm password">Confirm Password:
                    <input 
                    type = "password"
                    id = "cpassword"
                    className  ="form-control"
                    name = "cpassword"
                    value = {this.state.cpassword}
                    placeholder = "please confirm password"
                    onChange = {this.handleChange} />
                    </label>
                    <br/>

                    <button type = "button" className="btn btn-primary mb-2" onClick = {this.handleSubmit}>Register</button><br/>
                    <button type = "button" className="btn btn-primary mb-2" onClick = {this.handleClear}>Clear Form</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        registeredUserDetails:state.auth.registeredUserDetails
    }
}

export default connect(mapStateToProps)(Register);