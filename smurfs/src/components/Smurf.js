import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

const Smurf = (props) => {
    console.log(props)

  return (
    <div className='smurfCard'>
      {props.error ? (
        <div>{props.error}</div>
      ) : (
        props.data.map(smurf => 
        <div className="card" key={smurf.id}>
            <div >
                <h3>{smurf.name}</h3>
                <p>Age: {smurf.age}</p>
                <p>Height: {smurf.height}</p>
            </div>
        </div>)
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data,
    error: state.error
  };
};

export default connect(mapStateToProps, { getData })(Smurf); 