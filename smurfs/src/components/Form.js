import React from 'react';
import {connect} from 'react-redux';
import {addSmurfName, addSmurfAge, addSmurfHeight, postSmurf} from '../actions/index';


const Form = (values, addSmurfName, addSmurfAge, addSmurfHeight, postSmurf) => {
    const onSubmit = e => {
        e.preventDefault();
        postSmurf(values);
    }

    return (
        <form className='form'>
            <h4>Add your smurf here!</h4>
            <input type='text' name='name' value={values.name} onChange={addSmurfName} placeholder='Enter name' />
            <input type='text' name='age' value={values.age} onChange={addSmurfAge} placeholder='Enter age' />
            <input type='text' name='height' value={values.height} onChange={addSmurfHeight} palceholder='Enter height' />
            <button onClick={onSubmit}>Submit</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        values: state.formValues,
        disabled: state.disabled
    }
}

export default connect(mapStateToProps, {addSmurfName, addSmurfAge, addSmurfHeight, postSmurf})(Form);