import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import * as Actions from '../redux/actions/index';

class Home extends React.Component{
    state = {

    }

    handleLogOutClick = (e) => {
        console.log("clicked logout")
        try {
            this.props.history.push("/Login");
        } catch (e) {
            alert(e.message);
        }
    }
    render(){
        return(
            <div>
                <h1>You are succesfully logged in. Please logout</h1>
                <button type = "button" className="btn btn-primary mb-2" onClick = {this.handleLogOutClick}>Logout</button>
            </div>
        )
    }
}

export default Home;