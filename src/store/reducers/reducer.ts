import initialState from '../initialState';
import {ON_COURSE_TITLE_CLICK_HANDLER, ON_MODULE_TITLE_CLICK_HANDLER} from "../actionTypes/actionTypes";

function reducer(state = initialState, action: any) {

    switch (action.type) {
        case ON_COURSE_TITLE_CLICK_HANDLER:

            return {
                state
            };

        case ON_MODULE_TITLE_CLICK_HANDLER:

            return {


                state
            };

        default:
            return state;
    }
}

export default reducer;
