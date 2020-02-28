import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import { loginUser } from '../redux/actions';
//import {login} from '../redux/actions/authActions';


class Login extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        email: '',
        password: '',
        error: "",
        isValid: true,
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
            email: '',
            password: '',
            error: '',
            isValid: true
        })
    }

    componentDidMount = () => {
        this.props.dispatch(loginUser());
    }

    /*handleValidation = (e) => {
        const{email, password} = this.state;
        let err = []
        if(email.indexOf('@gmail.com') === -1 && email.indexOf('@rsrit.com') === -1){
            err.push({message: "It should be an email from gmail or Rsrit"})
            alert("should be email from gmail or rsrit")
        }
        if(password.length === 0){
            err.push({message: "password should not be empty"})
            alert("password field should not be empty")
        }
        return true
    }*/

    handleSubmit = (e) => {
        console.log("Login button clicked")
        e.preventDefault();
        if(this.state.password.length < 6){
            this.setState({
                isValid: false,
                error: "password length must be more than 5"
            })
        } else {
        try {
            this.props.history.push("/Home");
        } catch (error) {
            alert(error.message);
        }
    }
    }

    render(){
        return(
            <div className = "form-group">
                <form>
                    <h2>Login Form</h2>
                    <label htmlFor = "Email">Email Address:
                    <input 
                    type = "email"
                    className ="form-control"
                    id = "email"
                    name = "email"
                    value ={this.state.email}
                    placeholder = "Enter email address"
                    onChange = {this.handleChange}/>
                    </label>
                    <br/>

                    <label htmlFor = "password">Password:
                    <input 
                    type = "password"
                    id = "password"
                    className = "form-control"
                    name = "password"
                    value = {this.state.password}
                    placeholder = "Enter password"
                    onChange = {this.handleChange} />
                    </label>
                    <br/>

                    <button type = "button" className="btn btn-primary mb-2" onClick = {this.handleSubmit}>Login</button><br/>
                    <button type = "button" className="btn btn-primary mb-2" onClick = {this.handleClear}>Clear Form</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        signUpUsersList: state.auth.signUpUsersList
    };
}

export default connect(mapStateToProps)(Login);