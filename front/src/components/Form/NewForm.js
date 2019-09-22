import React from 'react';
import './NewForm.css';

export default function Form() {
    return (
        <form className="newForm">
            <div class="container">
            <h1>Enter new Resturant or Cafe</h1>
                <input type="text" class="name" placeholder="Name of Place" required/>
                <p><label for="picture" class="picture">Upload a picture:</label></p>
                <input type="file" class="newImage" accept="image/png, image/jpeg"/>           
                <input type="text" class="address" placeholder="Address" required/>
                <input type="text" class="firstComment" placeholder="comments" required/>
                <button type="submit" id="newbtn" name="submit">Submit</button>
            </div>
         </form>
    );
}


        
