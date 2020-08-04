import React,{useState} from 'react'
import { connect } from 'react-redux'
import {postSmurf} from '../actions/index'

const SmurfForm = (props) => {

    const [smurf, setSmurf] =useState({
        name:'',
        age:'',
        height:''
    })

    const smurfHandler = e => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        })
    }

    const submitSmurf =e => {
        e.preventDefault()
        props.postSmurf(smurf)
    }

    return(
        <>
            <h3>Add a new smurf!</h3>
            <input name='name' value={props.name} placeholder='Enter name' onChange={smurfHandler}/>
            <input name='age' value={props.age} placeholder='Enter age' onChange={smurfHandler}/>
            <input name='height' value={props.height} placeholder='Enter height' onChange={smurfHandler}/>
            <button onClick={submitSmurf}>Submit</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs,
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(mapStateToProps,{postSmurf})(SmurfForm)