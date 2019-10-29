import React from 'react';
import UNC from '../../Assets/Images/unc.jpeg';
import Location from '../Location/Location'
import './start.css'
import Icon from '../../Assets/Images/addIcon.png';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';

export default class Start extends React.Component {

    constructor (props) {
        super(props)
        this.state ={
            resturants:[]
        }

        fetch('http://localhost:8080/resturant/all') 
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
            <div className="home-page" ref={this.props.carRef}>
                <img src={UNC} class="UNC"/>
                <Link to="/resturantForm">
                    <img src={Icon} className="newCafeBtn"/>
                </Link>
                <ul className="Locations">
                {
                    this.state.resturants.map((resturant)=> {
                        return (
                            <li className="location-wrapper">
                                <Location
                                    title={resturant.title}
                                    address={resturant.address}
                                    comment={resturant.comments}
                                />
                                  <Button className="deleteBtn"type="submit">delete</Button>
                            </li>
                            )
                        }) 
                    }
                </ul>
            </div>
        );
    }
}