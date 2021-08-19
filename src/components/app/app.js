import React, {Component} from 'react'
import Header from '../header/header'
import RandomPlanet from '../random-planet/random-planet'
import SwapiService from "../../srvices/swapi-services";
import {SwapiserviceProvider} from '../swapi-service-context'
import {BrowserRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import './app.css';
import {StarshipDetails} from "../sw-compotets";
import {
    PeoplePage,
    PlanetsPage,
    StarshipPage,
    LoginPage,
    SecretPage
} from '../people-pages'

export default class App extends Component {
    swapiService = new SwapiService()
    state = {
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    render() {

        const {isLoggedIn} = this.state

        return (
            <SwapiserviceProvider value={this.swapiService}>
                <Router>
                    <div className='container'>
                        <Header/>
                        <RandomPlanet/>
                        <Switch>

                            <Route path='/'
                                   render={() => <h2>Welcome to StarDB</h2>}
                                   exact/>
                            <Route path="/people/:id?" component={PeoplePage}/>
                            <Route path="/planets" component={PlanetsPage}/>
                            <Route path="/starships" exact component={StarshipPage}/>
                            <Route path="/starships/:id"
                                   render={({match}) => {
                                       const {id} = match.params
                                       return <StarshipDetails itemId={id}/>
                                   }}/>
                            <Route path="/login"
                                   render={() => (
                                       <LoginPage isLoggedIn={isLoggedIn}
                                                  onLogin={this.onLogin}/>
                                   )}/>
                            <Route path="/secret"
                                   render={() => (
                                       <SecretPage isLoggedIn={isLoggedIn}/>
                                   )}/>
                            <Route render={() => <h2>Page not found</h2>}/>
                        </Switch>
                    </div>
                </Router>
            </SwapiserviceProvider>
        )
    }
}

