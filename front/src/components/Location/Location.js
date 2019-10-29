import React from 'react';
import {connect} from 'react-redux';
import CafeImg from '../../Assets/Images/Friends_cafe.png';

export  class Location extends React.Component {
    constructor() {
        super();

        this.state = {
            addresses: [],
            comments: []
        }
    }
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ul className="locations">
                    <img src={CafeImg}/>
                    <li>{this.props.address}</li>
                    <li>{this.props.comments}</li>
                </ul>
            </div>
        );
    }
}
Location.defaultProps = {
    title: 'Resturant/Cafe'
};
export default connect()(Location);