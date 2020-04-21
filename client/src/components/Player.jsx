import React from 'react';

class Player extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="small-cont">
                {/* <img src="" alt="" srcset=""/> */}
                <h1 className="items-cont">Name: {this.props.name}</h1>
                <h2 className="items-cont">Country: {this.props.country}</h2>
                <h2 className="items-cont">Searches: {this.props.searches}</h2>
            </div> 
        )
    }
}

export default Player;