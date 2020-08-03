import { FETCH_DATA, UPDATE_DATA, SET_ERROR, POST_SMURF, POST_SMURF_SUCCESS, ADD_SMURF_NAME, ADD_SMURF_AGE, ADD_SMURF_HEIGHT } from "../actions/index";

const initialDataState = {
    data: [],
    isFetchingData: false,
    error: "",
    name: '',
    age: null, 
    height: null
}

export const dataReducer = (state = initialDataState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                data: []
            }
        case UPDATE_DATA:
            return {
                ...state,
                isFetchingData: false,
                data: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        case POST_SMURF: 
            return {
                ...state, 
                isFetchingData: false
            }
        case ADD_SMURF_NAME:
            return {
                ...state,
                name: action.payload
            }
        case ADD_SMURF_AGE:
            return {
                ...state,
                age: action.payload
            }
        case ADD_SMURF_HEIGHT:
            return {
                ...state,
                height: action.payload
            }
        default:
            return state
    }
} 