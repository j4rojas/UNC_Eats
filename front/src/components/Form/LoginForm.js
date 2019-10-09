import React from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        }
    }
    handleUserName(event) {
        this.setState({
            userName: event.currentTarget.value
        })
    }
    handlePassword(event) {
        this.setState({
            password: event.currentTarget.value
        })
    }
    loginSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:8080/user/login', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((rep)=>{return rep.json()})
        .then((res) => {console.log(res)})
        .catch((err)=>{console.log(err)})
        console.log(this.state);
    }

    render () {
        return ( 
        <section id="loginPage">        
            <form className="loginForm" onSubmit={(event)=>this.loginSubmit(event)}> 
                <div className="container">
                    <h1 class="title">Login</h1>
                    <label class ="userLabel"for="usrname">Username</label>
                    <input type="text" placeholder="Please enter your username" class="username-login Info" name="usrname" required
                        onChange={(event)=> this.handleUserName(event)}
                    />
                    <label class="passwordLabel"for="pwd">Password</label>
                    <input type="password" placeholder="Please enter your password" class="password Info" name="pwd" required
                        onChange={(event)=> this.handlePassword(event)}
                    />
                    <button type="submit" id="sigbtn">Sign in</button>
                    <p class="reg"><Link to="/regForm">Not Enrolled? Sign Up Now</Link></p>
                </div>
            </form> 
        </section>
        );
    }
}

