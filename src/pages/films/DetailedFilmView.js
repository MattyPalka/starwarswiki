import React, { Component } from 'react'
import axios from 'axios'

import Spinner from '../../utilities/Spinner'
import { Link } from 'react-router-dom'

class DetailedFilmView extends Component {
    state = {
        ready: false,
        title: "",
        director: "",
        producer: "",
        releaseDate: "",
        openingText: "",
        characters: [],
        planets: [],
        starships: []
    }

    getApiData = async () => {

        axios.get(`https://swapi.dev/api/${this.props.match.path.split('/')[1]}/${this.props.match.params.id}/`).then((res) => {

            let title = res.data.title
            let director = res.data.director
            let producer = res.data.producer
            let releaseDate = res.data.release_date.split("T")[0]
            let openingText = res.data.opening_crawl
            let planets = []
            let characters = []
            let starships = []

            // get all characters in the movie data
            let characterPromises = []
            res.data.characters.forEach((character) => {
                characterPromises.push(axios.get(character))
            })

            // Create list with all characters names and link to page
            Promise.all(characterPromises).then((res) => {
                res.forEach((character, i) => {
                    characters.push(<li key={i}><Link to={`/${character.data.url.split('api/')[1]}`}>{character.data.name}</Link></li>)
                })

                this.setState({
                    characters
                })
            })

            // get all planets in the movie data
            let planetPromises = []
            res.data.planets.forEach((planet) => {
                planetPromises.push(axios.get(planet))
            })

            // Create list with all planets names and link to page
            Promise.all(planetPromises).then((res) => {
                res.forEach((planet, i) => {
                    planets.push(<li key={i}><Link to={`/${planet.data.url.split('api/')[1]}`}>{planet.data.name}</Link></li>)
                })

                this.setState({
                    planets
                })
            })

            // get all starships in the movie data
            let starshipPromises = []
            res.data.starships.forEach((starship) => {
                starshipPromises.push(axios.get(starship))
            })

            // Create list with all starships names and link to page
            Promise.all(starshipPromises).then((res) => {
                res.forEach((starship, i) => {
                    starships.push(<li key={i}><Link to={`/${starship.data.url.split('api/')[1]}`}>{starship.data.name}</Link></li>)
                })

                this.setState({
                    starships
                })
            })

            this.setState({
                ready: true,
                title,
                director,
                producer,
                releaseDate,
                openingText
            })
        })
    }

    componentDidMount() {
        this.getApiData()
    }

    render() {
        return (
            <div className="detailed-view container">
                <div className="row">
                    {!this.state.ready ? <Spinner /> :
                        <div className="col-sm-12">
                            <h4 className='text-center title'>{this.state.title}</h4>
                            <hr />
                            <div className="row">
                                <div className="col-sm-4">
                                    <p><strong>Director:</strong> {this.state.director}</p>
                                </div>
                                <div className="col-sm-4">
                                    <p><strong>Producer:</strong> {this.state.producer}</p>
                                </div>
                                <div className="col-sm-4">
                                    <p><strong>Release date:</strong> {this.state.releaseDate}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <p className='text-center'>{this.state.openingText}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <h5 className='text-center title m-3 mb-5'>Seen in this film...</h5>
                                </div>
                                <div className="col-sm-4">
                                    <h6 className='text-center title'>Characters</h6>
                                    {this.state.characters.length === 0 ? <Spinner /> : <ul>
                                        {this.state.characters}
                                    </ul>}
                                </div>
                                <div className="col-sm-4">
                                    <h6 className='text-center title'>Starships</h6>
                                    {this.state.starships.length === 0 ? <Spinner /> : <ul>
                                        {this.state.starships}
                                    </ul>}
                                </div>
                                <div className="col-sm-4">
                                    <h6 className='text-center title'>Planets</h6>
                                    {this.state.planets.length === 0 ? <Spinner /> : <ul>
                                        {this.state.planets}
                                    </ul>}
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>)
    }
}

export default DetailedFilmView