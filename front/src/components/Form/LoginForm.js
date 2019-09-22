import React from 'react';
import './LoginForm.css';
import { Link } from 'react-router';


<section id="loginPage">
    <form class="loginInfo"> 
        <div class="container">
            <label for="usrname"></label>
            <input type="text" placeholder="Username" class="username-login Info" name="usrname" required/>
            <label for="pwd"></label>
            <input type="password" placeholder="Password" class="password Info" name="pwd" required/>
            <label for="remember"></label>
            <input type="checkbox" class="checkbox-label" checked="checked" name="rememberMe"/>
            <span class="checkbox-text">Remember me</span>

            <button type="submit" id="sigbtn">Sign in</button>
        </div>
        <div class="container">
            {/* <!-- <p class="pwd"> <a href="#requestpwdPage">Forgot password?</a></p> --> */}
            <p class="reg"><Link to="regForm">Not Enrolled? Sign Up Now</Link></p>
        </div>
    </form>
</section>