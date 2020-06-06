import React, { Component } from 'react'
import axios from 'axios'

import Spinner from '../../utilities/Spinner'
import DisplayTile from '../../components/DisplayTile'
import Pagination from '../../utilities/Pagination'

class People extends Component {
    state = {
        ready: false,
        cards: [],
        nextPage: "",
        previousPage: ""
    }

    getApiData = () => {
        axios.get(`https://swapi.dev/api/${this.props.match.params.category}/${this.props.location.search}`).then((res) => {

            let cards = res.data.results.map((item, key) => {
                let apiUrlArray = item.url.split('/')
                let id = apiUrlArray[apiUrlArray.length - 2]
                return <DisplayTile key={key} link={`/${this.props.match.params.category}/${id}`} name={item.name} />
            })
            this.setState({
                cards: cards,
                ready: true,
                nextPage: res.data.next !== null ? res.data.next.split("?")[1] : "",
                previousPage: res.data.previous !== null ? res.data.previous.split("?")[1]: ""
            })
        })
    }

    //make sure that next / previous page is rendered on pagination click
    movePage = () => {
        this.setState({
            ready: false
        })
    }
    componentDidMount() {
        this.getApiData()
    }

    componentDidUpdate(prevProps, prevState){
        if (this.state.ready !== prevState.ready) {
            this.getApiData()
        }
    }

    render() {
        return (
            <div className="categories container">
                <div className='row mb-5'>
                    <div className='col-sm-12'>
                        <h4 className='text-center'>Discover Star Wars {this.props.location.pathname.replace(/\//g, "")}</h4>
                    </div>
                </div>
                <div className="row d-flex justify-content-around align-items-stretch">
                    {!this.state.ready ? <Spinner /> :
                        <>
                            <div className="col-9 col-sm-11">
                                <div className="row d-flex justify-content-around align-items-stretch">
                                    {this.state.cards}
                                </div>
                            </div>
                            <div className="col-3 col-sm-1">
                                <Pagination movePage={this.movePage} prevLink={`/${this.props.match.params.category}/?${this.state.previousPage}`} nextLink={`/${this.props.match.params.category}/?${this.state.nextPage}`}/>
                            </div>
                        </>
                    }
                </div>
            </div>
        )
    }
}

export default People