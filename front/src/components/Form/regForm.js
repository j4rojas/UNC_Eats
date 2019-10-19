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
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("This is the state: ", this.state);
        const data = {
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            email: this.state.email,
            userName: this.state.userName,
            password:this.state.password
        }
        console.log(data);
        fetch('http://localhost:8080/user/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then( (res) => {
                return res.json();
            })  
            .then( (resJSON) => {console.log(resJSON)
                // $('regpage').hide();
                // $('loginPage').show();
            })
            .catch((err) => {console.log(err)});
    }
    render () {
        return (
                <form class="regForm" onSubmit={(event) => this.handleSubmit(event)}>
                    <div class="container">
                        <h1 class="regTitle">Please Register for an account here</h1>
                        <label for="firstname"></label>
                        <input type="text" class="firstname Info" placeholder="First Name" name="firstName" required
                            onChange={(event) => this.handleChange(event)}
                        />
                        
                        <label for="lastname"></label>
                        <input type="text" class="lastname Info"placeholder="Last Name" name="lastName" required
                            onChange={(event) => this.handleChange(event)}
                        />    

                        <label for="username"></label>
                        <input type="text" class="regUsername Info"placeholder="Username" name="userName" required
                            onChange={(event)=> this.handleChange(event)}
                        />

                        <label for="pwd"></label>
                        <input type="password" class="regPassword Info"placeholder="Password" name="password" required
                            onChange={(event)=> this.handleChange(event)}
                        />

                        <label for="email"></label>
                        <input type="text" class="email Info"placeholder="Email" name="email"
                            onChange={(event)=> this.handleChange(event)}
                        />

                        <Button className="regBtn" type="submit">Register</Button>
                        <p class="login"><Link to="/LoginForm">Already have an account?</Link></p>
                    </div>
                </form>      
        );
    }
}
