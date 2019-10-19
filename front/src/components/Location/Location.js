import React from 'react';
import Comment from '../Comment/Comment';
import Address from '../Address/Address';
import {connect} from 'react-redux';
// import ResturantForm from '../Form/resturantForm';
import CafeImg from '../../Assets/Images/Friends_cafe.png';

export  class Location extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            addresses: [{
                text: '1234 Main St CA, 12345'
            }],
            comments: [{
                text:'example comment'
            }],
        }
    }
    render() {
        const addresses = this.state.addresses.map((address, index)=>
            <li key={index}>
                <Address {...address} />
            </li>
        );
        const comments = this.state.comments.map((comment,index)=>
            <li key={index}>
                <Comment {...comment}/>
            </li>
    );
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ul className="locations">
                    <img src={CafeImg}/>
                    {addresses}
                    {comments}
                    {/* <li>
                        <AddForm
                            type="comment"
                            onAdd={text => this.addComment(text)}
                        />
                    </li> */}
                
                </ul>
            </div>
        );
    }
}
Location.defaultProps = {
    title: 'Resturant/Cafe'
};
export default connect()(Location);




// export default function Location() {
//     return (
//         <div>
//             <h3>Example Resturant</h3>
//             <img src={CafeImg}/>
//             <ul className="Location">
//                 <li>
//                     <Address/>
//                 </li>
//                 <li>
//                     <Comment/>
//                 </li>
//             </ul>
//         </div>
//     );
// }