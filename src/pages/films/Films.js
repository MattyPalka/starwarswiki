import React, { Component } from 'react'
import axios from 'axios'

import Spinner from '../../utilities/Spinner'
import DisplayTile from '../../components/DisplayTile'

class Films extends Component {
    state = {
        ready: false,
        cards: []
    }

    componentDidMount() {    
        axios.get(`https://swapi.dev/api${this.props.match.path}/${this.props.location.search}`).then((res) => {
            let cards = res.data.results.map((item, key) => {
                return <DisplayTile key={key} link={`${this.props.match.path}/${item.episode_id}`} name={item.title} extraInfo={`${item.opening_crawl.slice(0, 200)}...`} />
            })
            this.setState({
                cards: cards,
                ready: true
            })
        })
    }


    render() {
        return (
            <div className="films container">
                <div className='row mb-5'>
                    <div className='col-sm-12'>
                        <h4 className='text-center'>Discover Star Wars Films</h4>
                    </div>
                </div>
                <div className="row d-flex justify-content-around align-items-stretch">
                    {this.state.ready ? this.state.cards : <Spinner />}
                </div>
            </div>
        )
    }
}

export default Films