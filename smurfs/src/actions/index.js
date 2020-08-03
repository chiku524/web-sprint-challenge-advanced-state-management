import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_DATA = "UPDATE_DATA";
export const SET_ERROR = "SET_ERROR";
export const POST_SMURF = "POST_SMURF";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const ADD_SMURF_NAME = "ADD_SMURF_NAME";
export const ADD_SMURF_AGE = "ADD_SMURF_AGE";
export const ADD_SMURF_HEIGHT = "ADD_SMURF_HEIGHT";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios.get("http://localhost:3333/smurfs")
        .then(response => {
            dispatch({ type: UPDATE_DATA, payload: response.data})
        })
        .catch(err => {
            dispatch({ type: SET_ERROR, payload: "Error: couldn't fetch data from api"})
    })
} 

export const postSmurf = (smurf) => {
    return dispatch => {
        dispatch({ type: POST_SMURF });
        axios
            .post('http://localhost:3333/smurfs', smurf)
            .then(res => {
                dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
            })
            .catch(err => console.log("error"))
    }
}

export const addSmurfName = (e) => {
    e.preventDefault();
    return {
        type: ADD_SMURF_NAME,
        payload: e.target.value
    }
}

export const addSmurfAge = (e) => {
    e.preventDefault();
    return {
        type: ADD_SMURF_AGE,
        payload: e.target.value
    }
}

export const addSmurfHeight = (e) => {
    e.preventDefault();
    return {
        type: ADD_SMURF_HEIGHT,
        payload: e.target.value
    }
}