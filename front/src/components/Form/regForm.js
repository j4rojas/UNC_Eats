import React from 'react';
import './regForm.css';

export default function regForm() {
    return (
             <form class="regForm">
                <div class="containerr">
                    <h1>Please sign-up here</h1>
                    <label for="firstname"></label>
                    <input type="text" class="firstname Info"placeholder="First Name" name="firstname" required/>

                    <label for="lastname"></label>
                    <input type="text" class="lastname Info"placeholder="Last Name" name="lastname" required/>    

                    <label for="email"></label>
                    <input type="text" class="email Info"placeholder="Email" name="email" required/>

                    <label for="username"></label>
                    <input type="text" class="regUsername Info"placeholder="Username" name="usrname" required/>

                    <label for="pwd"></label>
                    <input type="password" class="regPassword Info"placeholder="Password" name="pwd" required/>

                    <button type="submit" id="regbtn">Register</button>
                    {/* <p class="lgnin">Already have an account? <Link to="#loginPage">Sign in</Link>.</p> */}
                </div>
            </form>      
    );
}

