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
        fetch('http://localhost:8080/resturant/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(this.state)
        }) 
        // need to create token or might be part of the public view 
            .then((rep)=>{return rep.json()})
            .then( (res) => {console.log(res)})
            .catch((err)=>{console.log(err)})
            console.log(this.state);
    }
    render () {
        return (
            <form className="newForm" onSubmit={(event)=> this.handleSubmit(event)}>
                <div class="container">
                    <h1 class="cafeTitle">Enter new Resturant or Cafe</h1>
                    <input type="text" class="placeName" placeholder="Name of Place" name="title" required onChange={(event)=> this.handleChange(event)}/>
                    
                    <p><label for="picture" class="picture">Upload a picture:</label></p>
                    <input type="file" class="newImage" accept="image/png, image/jpeg" name="newImage" onChange={(event)=> this.handleChange(event)}/>           
                    
                    <input type="text" class="address" placeholder="Address" name="address" required onChange={(event)=> this.handleChange(event)}/>
                    <input type="text" class="comment" placeholder="comments" name="comment" required onChange={(event)=> this.handleChange(event)}/>                    
                    <Button className="createBtn" type="submit">Create</Button>
                </div>
            </form>   
        );
    }
}

