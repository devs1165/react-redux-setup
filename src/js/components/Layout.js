import React from 'react';
import connect from 'redux-connect-decorator';
import {test} from '../actions/testAction'
import NestedRouter from './master/NestedRouter/NestedRouter'; 

@connect((store) => {
    console.log(store.test.testData)
    return {
        testData : store.test.testData
    }
})

export default class Layout extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
        this.redirect=this.redirect.bind(this)
    }

    componentDidMount(){
        this.props.dispatch(test())
    }
    
    redirect(path){
        this.props.history.push({
            pathname : path
        })
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <NestedRouter routes = {this.props.routes} />
                </div>
            </React.Fragment>
        )
    }
}