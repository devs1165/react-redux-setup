import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class NestedRouter extends React.Component {
    render() {
        return this.props.routes.map((v, k) => {
            if(v.hasOwnProperty('redirectTo') && v.hasOwnProperty('redirectFrom')){
                return (
                    <Route
                        key = {v.path+"_k"}
                        path={v.path}
                        exact={v.exact}
                        component={(props) => {
                            return <Redirect to = {v.redirectTo}/>
                        }} />
                )
            }
            else
                return (
                    <Route
                        key = {v.path+"_k"}
                        path={v.path}
                        exact={v.exact}
                        render={(props) => {
                            return <v.component
                                {...props}
                                routes={v.routes} />
                        }} />
                )
        })
    }
}