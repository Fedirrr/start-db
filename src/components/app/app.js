import React, {Component} from 'react'
import Header from '../header/header'
import RandomPlanet from '../random-planet/'
import ItemDetails, {Record} from '../item-details/item-details'
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../srvices/swapi-services";

import ItemList from "../item-list/item-list";

import './app.css';
import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-compotets'

export default class App extends Component {
    swapiService = new SwapiService()
    state = {
        showRandomPlanet: true
    }
    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        })
    }

    render() {
        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        const {
            getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage,
            getAllPeople,
            getAllPlanets,
        } = this.swapiService

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}>
                <Record field='gender' label='Gender'/>
                <Record field='eyeColor' label='Eye Color'/>
            </ItemDetails>
        )


        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}>

                <Record field='model' label='Model'/>
                <Record field='length' label='Length'/>
                <Record field='costInCredits' label='Cost'/>
            </ItemDetails>
        )


        return (
            <div className='container'>
                <Header/>

                <PersonList >
                    {({name}) => <span>{name}</span>}
                </PersonList>



            </div>
        )
    }
}

