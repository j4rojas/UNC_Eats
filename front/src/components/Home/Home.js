import React from 'react';
import './Home.css';
import UNC from '../../Assets/Images/unc.jpeg';
import Location from '../Location/Location';
import Button from 'react-bootstrap/Button';

export default class Home extends React.Component {

    constructor () {
        super()
        this.state ={
            resturants:[]
        }
        fetch('http://localhost:8080/resturant/all') 
        // need to create token or might be part of the public view 
            .then((rep)=>{return rep.json()})
            .then( (res) => {
                
                console.log(res)
                this.setState({
                    resturants:res
                })
            })
            .catch((err)=>{console.log(err)})
            console.log(this.state);
    }

    render () {
        return(
            <div className="home-page">
                <img src={UNC} class="UNC"/>
                <p className="landingPage">Discover new cafes near UNC campus. Add new locations as you explore.</p>
                <Button className="loginBtn" href="/LoginForm">Sign In</Button>
                <ul className="Locations">
                    {
                        this.state.resturants.map((resturant)=> {
                            return (
                                <li className="location-wrapper">
                                    <Location
                                        title={resturant.title}
                                        CafeImage={resturant.CafeImage}
                                        address={resturant.address}
                                        comment={resturant.comment}
                                    />
                                </li>
                            )
                        }) 
                    }
                </ul>
            </div>
        );
    }
}


