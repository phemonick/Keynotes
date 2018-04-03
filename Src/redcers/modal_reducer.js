import {
    CLOSE_CHORDS_MODAL,
    OPEN_CHORDS_MODAL
} from '../actions/types';

const INITIAL_STATE = {
    chordsModalsOpen: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_CHORDS_MODAL: 
            return {
                chordsModalsOpen: action.payload
            };
        case CLOSE_CHORDS_MODAL: 
            return {
                chordsModalsOpen: action.payload
            };
        default:
            return state;
    }
};
