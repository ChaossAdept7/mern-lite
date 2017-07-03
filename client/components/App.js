/**
 * Created by serj on 5/23/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from './../redux/actions';
import {Button} from 'react-bootstrap';

class App extends Component{

    constructor(props){
        super(props)
        this.TestAction = this.TestAction.bind(this);
    }

    TestAction(){
        console.log('this',this);
        this.props.actions.test();
    }

    render(){
        return <div className="app">
            <div className="row">
                <Button onClick={this.TestAction} className="btn_blue">
                    Press Me
                </Button>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return state
}
function mapDispatchToProps(dispatch) {
    return {
        actions:bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);