import React, { Component } from 'react'
import './Searchbox.css'

class Searchbox extends Component {
    state = {
        searchCategory: 'films',
        searchQuery: ''
    }
    handleSearch = (e) => {
        e.preventDefault()
        this.props.history.push(`/${this.state.searchCategory}/?search=${this.state.searchQuery}`)
        this.props.history.go()

    }

    render() {
        return (
            <div className='searchbox'>
                <form onSubmit={this.handleSearch} className='w-100'>
                    <div className="input-group mb-3 col-sm-9">
                        <div className="input-group-prepend">
                            <select value={this.state.searchCategory} onChange={(e) => { this.setState({ searchCategory: e.target.value }) }} className="custom-select">
                                <option value="films">films</option>
                                <option value="people">people</option>
                                <option value="planets">planets</option>
                                <option value="species">species</option>
                                <option value="starships">starships</option>
                                <option value="vehicles">vehicles</option>
                            </select>
                        </div>
                        <input type="text" className="form-control" placeholder="What droids are you looking for?" value={this.state.searchQuery} onChange={(e) => {this.setState({searchQuery: e.target.value})}}/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Searchbox