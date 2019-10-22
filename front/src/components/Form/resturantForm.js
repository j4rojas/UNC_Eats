import React from 'react';
import './resturantForm.css';
import Button from 'react-bootstrap/Button';

export default class newResturantForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            newImage: "",
            address: "",
            comment: ""
        }
    }

    handleChange(event) {
        console.log(event.currentTarget.value);
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:8080/resturant/new/' + localStorage.getItem('token'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(this.state)
        }) 
        // need to create token or might be part of the public view 
            .then((rep)=>{return rep.json()})
            .then( (res) => {console.log(res)
            })
            .catch((err)=>{console.log(err)})
            console.log(this.state);
    }
    render () {
        return (
            <form className="newForm" onSubmit={(event)=> this.handleSubmit(event)}>
                <div className="container">
                    <h1 class="cafeTitle">Enter new Resturant/Cafe</h1>
                    <input type="text" className="placeName" placeholder="Name of Place" name="title" required onChange={(event)=> this.handleChange(event)}/>
                    
                    <p><label for="picture" className="picture">Upload a picture:</label></p>
                    <input type="file" className="newImage" accept="image/png, image/jpeg" name="newImage" onChange={(event)=> this.handleChange(event)}/>           
                    
                    <input type="text" className="address" placeholder="Address" name="address" required onChange={(event)=> this.handleChange(event)}/>
                    <input type="text" className="comment" placeholder="comments" name="comment" required onChange={(event)=> this.handleChange(event)}/>                    
                    <Button className="createBtn" type="submit">Create</Button>
                </div>
            </form>   
        );
    }
}

