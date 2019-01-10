import React from 'react';
import { connect } from 'react-redux';
import constants from './constants';

function List(props) {
    return (
        <div>
            <h1>List Example!</h1>
            <form onSubmit={props.itemSubmit}>
                <input onChange={props.itemChanges} value={props.item} ></input>
            </form>
            <ul>
                {props.items.map( (i, index) => 
                    <li key={index} onClick={() => props.itemDelete(index)}>{i}</li>
                )}
            </ul>
        </div>
    )
}

function mapStateToProps(state){
    return {
        item : state.item,
        items : state.items
    }
}

function mapDispatchToProps(dispatch){
    return {
        itemChanges : (evt) => {
            const action = { type : constants.ITEM_CHANGE , item : evt.target.value }
            dispatch(action);
        },
        itemSubmit : (evt) => {
            evt.preventDefault();
            dispatch({ type : constants.ITEM_SUBMIT , item : evt.target[0].value });
        },
        itemDelete : (index) => {
            const action = { type : constants.ITEM_DELETE, index : index };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);