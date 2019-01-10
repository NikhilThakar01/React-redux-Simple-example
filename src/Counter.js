import React from 'react';
import { connect } from 'react-redux';
import constants from './constants';

function Counter(props){
    console.log('render', props);
    return (
        <div >
            <h1>Counter Example!</h1>
            <p>Count : {props.count} </p>
            <button onClick={props.onIncrementClick}>+</button>
                &nbsp;
            <button onClick={props.onDecrementClick}>-</button>
                &nbsp;
            <button onClick={props.onResetClick}>Reset</button>
        </div>
    )
}

function mapStateToProps( state ){
    console.log('mapStateToProps Running ', state);
    return {
        count : state.count
    }
}

function mapDispatchToProps(dispatch){
    return {
        onIncrementClick : () => {
            const action = { type : constants.INCREMENT };
            dispatch(action);
        },
        onDecrementClick : () => {
            const action = { type : constants.DECREMENT };
            dispatch(action);
        },
        onResetClick : () => {
            const action = { type : constants.RESE };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);