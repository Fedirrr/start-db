import React, {Component} from 'react'
import './item-details.css'
import SwapiService from "../../srvices/swapi-services";
import ErrorButton from "../error-button/error-button";



const Record = ( { item, field, label}) => {
    return (
        <li className='list-group-item'>
            <span className='term'> {label} </span>
            <span> : { item[field] } </span>
        </li>
    )
}

export {
    Record
};




export default class ItemDetails extends Component {

    swapiService = new SwapiService()

    state = {
        person: null,
        image: null,
    }

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updatePerson()
        }
    }

    updatePerson() {
        const {itemId, getData, getImageUrl} = this.props
        if (!itemId) {
            return
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item)
                });
            })
    }

    render() {
        const {item, image} = this.state
        if (!this.state.item) {
            return <span> Select a person from a list</span>
        }

        const {
            id, name, gender,
            birthYear, eyeColor,
        } = item

        return (
            <div className='person-details cards'>
                <img className='person-img'
                     src={image}
                     alt={'item'}/>

                <div className="cardBody">
                    <h4>{name}</h4>
                    <ul className='list-group list-group-flush'>
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {item})

                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
