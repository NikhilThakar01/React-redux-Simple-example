import React from 'react';
import { connect } from 'react-redux';
import constants from './constants';

const HandleChange = (props) => {
    console.log('props : ', props);
    return (
        <div>
            <h1>Input Mirrer Example!</h1>
            <input value={props.text} onChange={props.inputHandleChange}></input>
            <p>{props.text}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('mapToStateprops : ', state);
    return {
        text : state.text
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        inputHandleChange : (e) => {
            const action = { type : constants.INPUT_CHANGE, text : e.target.value };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HandleChange);