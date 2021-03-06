import React, {Component} from 'react'
import SwapiService from "../../srvices/swapi-services";
import Spiner from "../spiner/spiner";
import ErrorIndicator from "../error-indicator/error-indicator";
import PropTypes from 'prop-types'
import './random-planet.css'


export default class RandomPlanet extends Component {

    static defaultProps = {
        updateInterval: 10000
    }
    static propTypes = {
        updateInterval: PropTypes.number.isRequired
    }

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
    }

    componentDidMount() {
        const {updateInterval} = this.props
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, updateInterval)
    }

    componentWillMount() {
        clearInterval(this.interval)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false,
        })
    }


    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
        })
    }
    updatePlanet = () => {

        const id = Math.floor(Math.random() * 17) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    render() {
        const {planet, loading, error} = this.state
        const hasData = !(loading || error)
        const errorMessage = error ? <ErrorIndicator/> : null;
        const spiner = loading ? <Spiner/> : null;
        const content = hasData ? <PlanetPreview planet={planet}/> : null;
        return (

            <div className='random-planet d-flex'>
                {errorMessage}
                {spiner}
                {content}
            </div>

        )
    }

}
const PlanetPreview = ({planet}) => {
    const {
        id, name, diameter,
        population, rotationPeriod
    } = planet;

    return (
        <React.Fragment>
            <img className='planet-img' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                 alt='planets'/>
            <div className='random-info'>
                <h4>
                    {name}
                </h4>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span>Population </span>
                        <span>{population}</span>
                    </li>
                    <li className='list-group-item'>
                        <span>RotationPeriod </span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className='list-group-item'>
                        <span>Diameter </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>

        </React.Fragment>
    )
};




