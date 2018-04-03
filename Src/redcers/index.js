import { combineReducers } from 'redux';
import Keys from './keys_reducers';
import selectedValue from './selection_reducers';

export default combineReducers({
    Keys, selectedValue
});
