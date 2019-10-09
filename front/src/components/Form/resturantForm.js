import React from 'react';
import './resturantForm.css';

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
handleChangeTitle(event) {
    this.setState ({
        title: event.currentTarget.value
    })
}

handleChangeImage(event) {
    this.setState ({
        newImage: event.currentTarget.value
    })
}
handleChangeAddress(event) {
    this.setState ({
        address: event.currentTarget.value
    })
}
handleChangeComment(event) {
    this.setState ({
        comment: event.currentTarget.value
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
            <form className="resturant" 
                onSubmit={(event)=> this.handleSubmit(event)}
            >
                <div class="container">
                <h1>Enter new Resturant or Cafe</h1>
                    <input type="text" class="title" placeholder="Name of Place" required
                        onChange={(event)=> this.handleChangeTitle(event)}
                    />
                    <p><label for="picture" class="picture">Upload a picture:</label></p>
                    <input type="file" class="newImage" accept="image/png, image/jpeg"
                        onChange={(event)=> this.handleChangeImage(event)}    
                    />           
                    <input type="text" class="address" placeholder="Address" required
                        onChange={(event)=> this.handleChangeAddress(event)}
                    />
                    <input type="text" class="comment" placeholder="comments" required
                        onChange={(event)=> this.handleChangeComment(event)}
                    />
                    <button type="submit" id="newbtn" name="submit">Submit</button>
                </div>
            </form>   
        );
    }
}
