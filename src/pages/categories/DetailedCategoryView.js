import React, { Component } from 'react'
import axios from 'axios'

import Spinner from '../../utilities/Spinner'
import { Link } from 'react-router-dom'

class DetailedCategoryView extends Component {
    state = {
        ready: false,
        name: "",
        objectData: [],
        relatedFilms: []
    }

    getApiData = async () => {
        axios.get(`https://swapi.dev/api/${this.props.match.params.category}/${this.props.match.params.id}/`).then((res) => {

            let name = res.data.name
            let details = []
            let films = []
            

            // Loop through api response data and exlude all data that is not string / url / irrelevant 
            // to this object so it can be used to dynamicaly build detailed page with key value pairs
            let i = 0
            for (let key in res.data) {
                i++
                if (typeof (res.data[key]) === 'string') {
                    if (!/(url)|(created)|(edited)|(name)|(homeworld)/.test(key)) {
                        details.push(<p key={i}><strong>{key.replace(/_/g, ' ')}: </strong>{res.data[key]}</p>)
                    }
                }
            }

            //get name of each film that this object was in
            let filmPromises = []
            res.data.films.forEach((film) => {
                filmPromises.push(axios.get(film))
            })

            //Create links to related films to display on detailed page
            Promise.all(filmPromises).then((res)=> {
                res.forEach((film, i) => {
                    films.push(<li key={i}><Link to={`/${film.data.url.split('api/')[1]}`}>{film.data.title}</Link></li>)
                })

                this.setState({
                    ready: true,
                    name: name,
                    objectData: details,
                    relatedFilms: films
                })
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
                            <h4 className='text-center title'>{this.state.name}</h4>
                            <hr />
                            <div className="row">
                                <div className="col-sm-6">
                                    {this.state.objectData}
                                </div>
                                <div className='col-sm-6'>
                                    <h4 className='title'>Seen in:</h4>
                                    <ul>
                                        {this.state.relatedFilms}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>)
    }
}

export default DetailedCategoryView