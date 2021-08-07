import React, {Component} from 'react'
import ItemList from "../item-list/item-list";
import PersonDetails from "../item-details/item-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../srvices/swapi-services";
import ErrorBoudry from '../error-boudry/error-boudry.js'
import Row from '../row/row'



export default class PeoplePage extends Component {
    swapiService = new SwapiService()

    state = {
        selectedPerson: 3,
    }


    onPersonSelected = (selectedPerson) => {
        this.setState({selectedPerson})
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>

                {(i) => (
                    `${i.name}, ( ${i.birthYear} )`
                )}
            </ItemList>
        )
        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson}/>

        )
        return (
            <ErrorBoudry>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoudry>
        )
    }
}
