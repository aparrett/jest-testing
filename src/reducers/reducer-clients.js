import { FETCH_CLIENT } from '../actions';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_CLIENT:
            if (!action.payload.id) {
                return state;
            }
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
}