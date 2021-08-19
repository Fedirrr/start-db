import React from 'react'
import {SwapiserviceConsumer} from '../swapi-service-context'

const withSwapiService = (Wrapped, mapMethodsToProps) => {
    return (props) => {
        return (
            <SwapiserviceConsumer>
                {
                    (swapiservice) => {
                        const serviceProps = mapMethodsToProps(swapiservice);
                        return (
                            <Wrapped {...props} {...serviceProps}/>
                        )
                    }
                }
            </SwapiserviceConsumer>
        )
    }
}

export default withSwapiService
