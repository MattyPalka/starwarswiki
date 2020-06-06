import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Pagination.css'

class Pagination extends Component{
    render(){
        return(
            <div className="Pagination h-100 d-flex flex-column justify-content-center align-items-middle">
                <div className="m-3">
                    <Link className={this.props.prevLink.split("?")[1] === "" ? 'disabled-link': ""} to={this.props.prevLink} onClick={this.props.movePage}><i className="fas fa-angle-double-up fa-2x"></i></Link>
                </div>
                <div className="m-3">
                    <Link className={this.props.nextLink.split("?")[1] === "" ? 'disabled-link': ""} to={this.props.nextLink} onClick={this.props.movePage}><i className="fas fa-angle-double-down fa-2x"></i></Link>
                </div>
            </div>
        )
    }
}

export default Pagination