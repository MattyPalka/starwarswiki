import React, {Component} from 'react'
import axios from 'axios'

import Spinner from '../../utilities/Spinner'

class DetailedCategoryView extends Component{
    state = {
        ready: false,
        name: ""
    }

    getApiData = () => {
        axios.get(`https://swapi.dev/api/${this.props.match.params.category}/${this.props.match.params.id}`).then((res)=>{
            console.log(res.data)
            this.setState({
                name: res.data.name
            })
        })
    }

    componentDidMount(){
        this.getApiData()
    }

    render(){
        return(
        <div className="detailed-view container">
            <div className="row">
                <div className="col-sm-12">
                    <h4 className='text-center title'>{this.state.name}</h4>
                </div>
            </div>
        </div>)
    }
}

export default DetailedCategoryView