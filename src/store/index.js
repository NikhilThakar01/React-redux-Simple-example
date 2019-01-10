import { createStore } from 'redux';
import constants from '../constants';

const initialState = {
    count : 0,
    text : '',
    item : '',
    items : []
};

const reducer = (state = initialState, action) => {
    console.log('reducer running ', action);
    
    switch (action.type){
        case constants.INCREMENT :
            return Object.assign({}, state, { count : state.count + 1 });
        case constants.DECREMENT :
            return Object.assign({}, state, { count : state.count - 1 });
        case constants.RESET : 
            return Object.assign({}, state, { count : 0 });
        case constants.INPUT_CHANGE :
            return Object.assign({}, state, { text : action.text});
        case constants.ITEM_CHANGE : 
            return Object.assign({}, state, { item : action.item});
        case constants.ITEM_SUBMIT :
            return Object.assign({}, state, { 
                item : '',
                items : state.items.concat(action.item),
            })
        case constants.ITEM_DELETE :
            const tempItems = state.items.slice();
            tempItems.splice(action.index, 1);
            return Object.assign({}, state, {items : tempItems });
        default :
            return state;
    }
}

const store = createStore(reducer);

export default store;