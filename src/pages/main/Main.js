import React , {Component} from 'react'
import DisplayTile from '../../components/DisplayTile'
import Spinner from '../../utilities/Spinner'


// This is just to autogenerate all tiles to display categories. Could easily be stored in DB
// and grabbed onComponentDidMount to provide more data / categories if needed
const categories = [
    {name:'Discover films', icon: 'film', link: '/films'},
    {name:'Discover people', icon: 'user-friends', link: '/people'},
    {name:'Discover planets', icon: 'globe-europe', link: '/planets'},
    {name:'Discover species', icon: 'brain', link: '/species'},
    {name:'Discover starships', icon: 'space-shuttle', link: '/starships'},
    {name:'Discover vehicles', icon: 'motorcycle', link: '/vehicles'},
]


class Main extends Component{
    state = {
        ready: false,
        cards: []
    }

    componentDidMount(){
        // create list of categories
        let cards = categories.map((item, key) => {
            return <DisplayTile key={key} icon={item.icon} name={item.name} link={item.link}/>
                   
        })
        this.setState({
            cards: cards,
            ready: true
        })
    }
    render() {
        return(
            <div className="container">
                <h4 className="text-center mb-4">Get to know Star Wars</h4>
                <div className="row d-flex justify-content-around align-items-stretch">
                    {this.state.ready ? this.state.cards : <Spinner/>}
                </div>
            </div>
        )
    }
}

export default Main