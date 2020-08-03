import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

const SmurfCard = props => {
    const handleGetData = event => {
        event.preventDefault();
        props.getData();
    }
    return (
        <div>
            {props.isFetchingData ? (
                <div>Fetching Smurfs...</div>
                ) : (
                <button onClick={handleGetData}>Get Smurfs</button>
                )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, { getData })(SmurfCard) 