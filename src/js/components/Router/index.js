import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import NestedRouter from './../master/NestedRouter/NestedRouter';

export default class Router extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            routes : this.props.routes !== undefined ? this.props.routes : []
		}
    }

    componentWillReceiveProps(nextProps){
        // if route config changed dynamically
        if(this.props.routes !== nextProps.routes){
            this.setState({
                routes : nextProps.routes
			})
        }
    }

    render(){
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <NestedRouter routes = {this.state.routes} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}