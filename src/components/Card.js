import React, { Component } from "react"
import './Components.css';

class Card extends Component {
    render() {
        return (
            <div>
                <div className="card-size">
                    <img className="card-img" src={require(`../../src/images/carousel/${this.props.img}`)} alt="..." />
                </div>
            </div>
        )
    }


}


export default Card