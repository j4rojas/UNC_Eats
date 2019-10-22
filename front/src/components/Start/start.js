import React from 'react';
import {connect} from 'react-redux'
import Location from '../Location/Location'
import Button from 'react-bootstrap/Button';
import ResturantForm from '../Form/resturantForm';
import {addLocation} from '../../actions';

export class Start extends React.Component {
    addLocation(title) {
        this.props.dispatch(addLocation(title, this.props.match.params.startId));
    }

    render () {
        const locations = this.props.locations.map((location,index) => (
            <li className="location-wrapper" key={index}>
                <Location
                    index={index}
                    startId={this.props.match.params.startId}
                    {...location}
                />
            </li>
        ));

        return (
            <div className="start">
                <h2>{this.props.match.params.startId}</h2>
                <ul className="locations">
                    {locations}
                    <li className="add-location-wrapper">
                        <ResturantForm
                            type="location"
                            onAdd={title=> this.addLocation(title)}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}
Start.defaultProps = {
    title: 'Start'
};

const mapStateToProps = (state,props) => {
    const start = Object.assign(
        {},
        {
            locations: []
        },
        state.starts[props.match.params.startId]
    );
    return {
        locations: start.locations
    };
};

export default connect(mapStateToProps)(Start);




