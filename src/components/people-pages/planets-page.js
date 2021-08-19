import React, {Component} from "react";
import Row from "../row/row";
import { PlanetDetails, PlanetList} from "../sw-compotets";

export default class PlanetsPage extends Component {
    state = {
        selectedItem: null
    }

    onSelectedItem = (selectedItem) => {
        this.setState({
            selectedItem
        })
    }

    render() {
        const {selectedItem} = this.state
        return (
            <Row
                left={<PlanetList onItemSelected ={this.onSelectedItem} />}
                right={<PlanetDetails itemId={selectedItem}/>}
            />
        )
    }
}
