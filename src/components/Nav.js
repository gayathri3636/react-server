import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <h2>My Application</h2>
                    <div className = "link">
                    <Link className = "link-header" to = "/Login">Login</Link>
                    <Link className = "link-header"to = "/Register">Register</Link>
                    </div>
                </header>
            </div>
        )
    }
}

export default Nav;