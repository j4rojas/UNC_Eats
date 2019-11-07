import React from 'react';
import {connect} from 'react-redux';

export  class Location extends React.Component {
    constructor() {
        super();

        this.state = {
            CafeImage:[],
            addresses: [],
            comments: []
        }
    }
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ul className="locations">
                    <li className="CafeImage"><img src={this.props.CafeImage} width="170px"/></li>
                    <li>{this.props.address}</li>
                    <li className="Comments">{this.props.comment}</li>
                </ul>
            </div>
        );
    }
}
Location.defaultProps = {
    title: 'Resturant/Cafe'
};
export default connect()(Location);