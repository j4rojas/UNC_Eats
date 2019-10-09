import React from 'react';
import './regForm.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default class registrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            firstName: "",
            lastName: "",
            email: "",
            userName: "",
            password:""
        }
    }
    handleChange(event) {
        console.log(event.currentTarget.value);
        this.setState({
            firstName: event.currentTarget.value
        })
    }
    handleChangeLastName(event) {
        console.log(event.currentTarget.value);
        this.setState({
            lastName: event.currentTarget.value
        })
    }

    handleChangeEmail(event) {
        console.log(event.currentTarget.value);
        this.setState({
            email: event.currentTarget.value
        })
    }

    handleChangeUserName(event) {
        console.log(event.currentTarget.value);
        this.setState({
            userName: event.currentTarget.value
        })
    }

    handleChangePassword(event) {
        console.log(event.currentTarget.value);
        this.setState({
            password: event.currentTarget.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("This is the state: ", this.state);
        fetch('http://localhost:8080/user/new', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then( (res) => {console.log(res)})
            .catch((err)=>{console.log(err)});
        console.log(this.state);
    }
    render () {
        return (
                <form class="regForm" onSubmit={(event) => this.handleSubmit(event)}>
                    <div class="container">
                        <h1 class="regTitle">Please Register for an account here</h1>
                        <label for="firstname"></label>
                        <input type="text" class="firstname Info" placeholder="First Name" name="firstname" required
                            onChange={(event) => this.handleChange(event)}
                        />
                        
                        <label for="lastname"></label>
                        <input type="text" class="lastname Info"placeholder="Last Name" name="lastname" required
                            onChange={(event) => this.handleChangeLastName(event)}
                        />    

                        <label for="email"></label>
                        <input type="text" class="email Info"placeholder="Email" name="email"
                            onChange={(event)=> this.handleChangeEmail(event)}
                        />

                        <label for="username"></label>
                        <input type="text" class="regUsername Info"placeholder="Username" name="usrname" required
                            onChange={(event)=> this.handleChangeUserName(event)}
                        />

                        <label for="pwd"></label>
                        <input type="password" class="regPassword Info"placeholder="Password" name="pwd" required
                            onChange={(event)=> this.handleChangePassword(event)}
                        />
                        <Button className="regBtn" href="/start">Register</Button>
                        <p class="login"><Link to="/LoginForm">Already have an account?</Link></p>
                    </div>
                </form>      
        );
    }
}
