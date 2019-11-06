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

    handleChange(event) {
        console.log(event.currentTarget.value);
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    }
    
    loginSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:8080/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((rep)=>{return rep.json()})
        .then((res) => {console.log(res) 
            if(res.error) {
                alert(res.message);
            }
            else {
            localStorage.setItem('token', res.token);
            this.props.history.push('/start');
            }
         
        })
        .catch((err)=>{console.log(err)})
        console.log(this.state);
    }
    render () {
        return ( 
        <section id="loginPage"> 
            <form className="loginForm" onSubmit={(event)=>this.loginSubmit(event)}> 
            <h1 className="title">Login</h1>
                <div className="container">
                    <label className ="userLabel"for="usrname">Username</label>
                    <input type="text" className="use Info" placeholder="Please enter your username" class="username-login Info" name="userName" required
                        onChange={(event)=> this.handleChange(event)}
                    />
                    <label className="passwordLabel"for="pwd">Password</label>
                    <input type="password" class="pass Info" placeholder="Please enter your password" class="password Info" name="password" required
                        onChange={(event)=> this.handleChange(event)}
                    />
                    <button type="submit" id="sigbtn">Login</button>
                    <p className="reg"><Link to="/regForm">Not Enrolled? Sign Up Now</Link></p>
                </div>
            </form> 
        </section>
        );
    }
}