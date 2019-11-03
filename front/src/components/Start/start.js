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
    handleDelete(event) {
        event.preventDefault();
        fetch('http://localhost:8080/resturant/one/' + event.currentTarget.value +'/' +  localStorage.getItem('token'), {
            method: 'Delete',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((rep)=>{return rep.json()})
        .then((res)=>{console.log(res)
            this.props.history.push('/start');
        })
        .catch((err)=>{console.log(err)})
        console.log(this.state);
    }

    handleLogOut(event) {
        event.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/');
    }

    render () {

        return(
            <div className="home-page" ref={this.props.carRef}>
                <img src={UNC} class="UNC"/>
                <Link to="/resturantForm">
                    <img src={Icon} className="newCafeBtn"/>
                </Link>
                <Button className="logOut" type="button" onClick={(event)=> this.handleLogOut(event)}>Log Out</Button>
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
                                  <Button className="deleteBtn"type="submit" value={resturant._id} onClick={(event)=> this.handleDelete(event)}>delete</Button>
                            </li>
                            )
                        }) 
                    }
                </ul>
            </div>
        );
    }
}