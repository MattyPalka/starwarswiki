import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DisplayTile.css'


class DisplayTile extends Component {
    render() {
        return (
            <div className="col-sm-4 col-md-3 mb-4 display-tile">
                <Link to={this.props.link}>
                <div className="card p-3 h-100">
                    <div className="card-title d-flex justify-content-center mt-2 " >
                        <i className={`fas fa-${this.props.icon} fa-4x`}></i>
                    </div>
                    <div className="card-body p-1 text-center">
                        <p className='title'>{this.props.name}</p>
                        <p className='extra-info'>{this.props.extraInfo}</p>
                    </div>
                </div>
                </Link>
            </div >
        )
    }
}

export default DisplayTile